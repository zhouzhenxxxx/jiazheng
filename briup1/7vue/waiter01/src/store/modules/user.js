import {get,post_json,post} from '../../http/axios'
import { getToken,setToken,removeToken } from '../../utils/auth'
export default{
    namespaced:true,
    state:{
        token:getToken,
        info:{} //员工信息
    },
    getters:{

    },
    mutations:{
        refreshInfo(state,info){
            state.info = info;
        },
        refreshToken(state,token){
            state.token = token;
        }
    },
    actions:{
        async login(context,payload){
            //1.登录
            let response = await post_json('/user/login',payload);
            //2.获取token
            let token = response.data.token;
            //3.将token缓存起来
            setToken(token);
            //将token维护到状态机里
            context.commit("refreshToken",token)
            // //通过token获取员工的信息
            // context.dispatch("info",token)
        },
        //通过token获取员工信息info
        async info(context,token){
            let response = await get('/user/info',{token});
            //将用户信息设置到info中
            context.commit("refreshInfo",response.data)
        },
        async logout(context,token){
            //1.请求后台退出
            await post('/user/logout',token);
            //2.清除token
            removeToken(token);
            //3.清理store
            context.commit("refreshInfo",{});
            context.commit("refreshToken",'')

        }
    }
}