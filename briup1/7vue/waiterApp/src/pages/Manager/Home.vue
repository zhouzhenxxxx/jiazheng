<template>
    <div class="home">
        <van-row>
            <img style="width:100%" src="../../assets/images/photo1.jpg" alt="">
        </van-row>
        <!-- copy -->
        <van-row v-if="orderStatusFilter('待接单').length>0">
        <van-panel :title="o.customer.realname" :status="o.status" v-for="o in orderStatusFilter('待接单')" :key="o.id">
            <van-row>
            <van-col :span="4" style="text-align:center"><van-icon name="gem-o" /></van-col>
            <van-col :span="20">总额： {{o.total}}</van-col>
            </van-row>
            <van-row>
            <van-col :span="4" style="text-align:center"><van-icon name="clock-o" /></van-col>
            <van-col :span="20">下单时间：{{o.orderTime}}</van-col>
            </van-row>
            <van-row>
            <van-col :span="4" style="text-align:center"><van-icon name="clock-o" /></van-col>
            <van-col :span="20">服务内容：{{}}</van-col>
            </van-row>
            <van-row>
            <van-col :span="4" style="text-align:center"><van-icon name="location-o" /></van-col>
            <van-col :span="20">地址： {{o.address.province+" "+o.address.city+" "+o.address.area}}</van-col>
            </van-row>
            
            <div slot="footer" style="text-align:right">
            <van-button size="small" type="warning" plain @click="rejectHandler(o.id)">拒绝</van-button>&nbsp;
            <van-button size="small" type="primary" plain @click="acceptHandler(o.id)">接受</van-button> 
            </div>
        </van-panel>
        </van-row>
        <van-row v-else>
            <p class="top">暂时没有订单，再等等吧亲</p>
            <img class="two" src="@/assets/images/photo3.jpg" alt="">
            <p class="bottom">乖巧加载.jpg</p>
        </van-row>
    </div>
</template>
<script>
    import {mapState,mapActions,mapGetters} from 'vuex'
    export default {
    created(){
        this.findWaiterOrders();
    },
    computed:{
        ...mapState("order",["orders"]),
        ...mapGetters("order",["orderStatusFilter"])
    },
    methods:{
        ...mapActions("order",["findWaiterOrders","rejectOrder","acceptOrder"]),
        acceptHandler(orderId){
        this.acceptOrder(orderId)
        .then((response)=>{
            this.$toast(response.statusText);
        })
        },
        rejectHandler(orderId){
        this.rejectOrder(orderId)
        .then((response)=>{
            this.$toast(response.statusText);
        })
        }
    }
    }
    </script>
    <style scoped>
    .home {
        padding-bottom: 60px;
    }
    .top{
        border-top:1px solid #ccc;
        padding-top:50px;
        padding-bottom:20px;
        text-align: center
    }
    .bottom{
        padding-bottom:30px;
        text-align: center
    }
    .two{
        padding-left:75px;
        width:150px;
        height:140px
    }
    </style>