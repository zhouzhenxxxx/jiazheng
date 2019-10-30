<template>
    <div class="layout">
        <router-view></router-view>
        <div>
            <!-- <router-link to="/home">首页</router-link>
            <router-link to="/order">订单</router-link>
            <router-link to="/user">我的</router-link> -->
            <van-tabbar v-model="active" @change="tabChangeHandler">
                <van-tabbar-item name="/home" icon="star-o">首页</van-tabbar-item>
                <van-tabbar-item name="/order" icon="cart-circle-o">订单</van-tabbar-item>
                <van-tabbar-item name="/user" icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:'/home'
        }
    },
    methods:{
        tabChangeHandler(path){
            this.$router.push({path});
        }
    }
}
</script>