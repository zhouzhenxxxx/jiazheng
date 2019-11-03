import {get,post_json,post} from '../../http/axios'
import { getToken,setToken,removeToken } from '../../utils/auth'
export default{
    namespaced:true,
    state:{
        token:getToken,
        userinfo:{} //员工信息
    },
    getters:{

    },
    mutations:{
        refreshInfo(state,userinfo){
            state.userinfo = userinfo;
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
        },

        //通过token获取员工信息info
        async getUserInfo(context,token){
            let response = await get('/user/info',{token});
            //将用户信息设置到info中
            context.commit("refreshInfo",response.data)
        },
        async logout(context){
            //1.请求后台退出
            await post('/user/logout');
            //2.清除token
            removeToken();
            //3.清理store
            context.commit("refreshToken",'')
            context.commit("refreshInfo",{});

        }
    }
}