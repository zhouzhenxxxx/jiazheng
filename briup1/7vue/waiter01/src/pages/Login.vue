<template>
    <div class="login">
        <div class="header">
            <div class="logo">jz</div>
            <div class="title">家政服务-员工端</div>
        </div>
        <div class="form">
            <van-cell-group>
            <van-field
                v-model="form.username"
                required
                clearable
                label="用户名"
                placeholder="请输入用户名"
            />

            <van-field
                v-model="form.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
            </van-cell-group>
    <div style="text-align:center">
        <van-button type="default" size="small" @click="loginHandler">登录</van-button>
    </div>
        </div>
    </div>
</template>
<script>
import {mapMutations,mapActions, mapState, mapGetters} from 'vuex';
export default {
    data(){
        return {
            form:{type:"waiter"}
        }
    },
    computed:{
        
    },
    methods:{
        ...mapActions('user',['login','info']),
        ...mapMutations('user',['refreshInfo']),
        loginHandler(){
            this.login(this.form)
            .then(()=>{
                //跳转到首页
                this.$router.push({path:'/home'})
            })
        },
    }
}
</script>
<style scoped>
   .header {
       height:90px;
       padding:50px;
       color:white;
       background-color: lightsteelblue;
       text-align: center;
   }
   .logo{
       width:40px;
       height:40px;
       border: 1px solid #efefef;
       border-radius: 50%;
       line-height: 50px;
       margin: 0 auto;
       margin-bottom: 1em;
   }
</style>