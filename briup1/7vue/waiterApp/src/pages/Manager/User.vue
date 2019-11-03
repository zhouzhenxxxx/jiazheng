<template>
    <div class="user">
        <p>我的</p>
        <div class="photo">
            <img src="../../assets/images/photo2.jpg" alt="">
        </div>
        <van-cell-group class="category">
            <van-cell value="我的收入" />
            <van-cell value="我的订单" />
            <van-cell value="退出" @click.prevent="logoutHandler"/>
            
        </van-cell-group>
        <!-- <p>
            <a href="" @click.prevent="logoutHandler">退出</a>
        </p> -->
    </div>
</template>
<script>
import {mapState} from 'vuex';//copy
export default {
    data(){
        return {

        }
    },
    computed:{
    ...mapState("user",["userinfo"])
    },
    methods:{
        logoutHandler(){
            this.$router.push({path:'/login'})
        }
    }
}
</script>
<style scoped>

p{
    text-align: center;
}
img{
    height:70px;
    width:70px;
    border:1px solid #efefef;
    border-radius: 50%;
    line-height: 50px;
    position: relative;
    left:-36px;
    
}
.photo{
    margin-left: 50%;
    line-height: 50px;
}
.category{
    cursor: pointer;
}
</style>