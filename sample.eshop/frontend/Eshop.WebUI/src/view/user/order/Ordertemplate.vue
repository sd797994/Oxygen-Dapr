<template>
    <ul>
        <li v-for="item in orderlist" :key="item.id">
            <van-panel>
                <div slot="header">
                    <van-cell :value="item.state==1?'未支付':item.state==2 ? '已完成':item.state==3 ?'已关闭':''"
                        :label="item.orderNo">
                        <template slot="title">
                            <span class="custom-title" style="color:#666;font-size:12px;">{{item.time}}</span>
                        </template>
                    </van-cell>
                </div>
                <div slot="default">
                    <ul v-for="goods in item.orderItems" :key="goods.id" style="font-size:11px;">
                        <li>
                            <van-cell>
                                <template slot="icon">
                                    <van-image style="margin-left:10px;margin-right:10px" width="60" height="60"
                                        :src="goods.imageCode" />
                                </template>
                                <template slot="title">
                                    <span class="custom-title">{{goods.name}}</span>
                                </template>
                                <template slot="label">
                                    <span class="custom-title">× {{goods.count}}</span>
                                </template>
                                <template slot="default">
                                    <span class="custom-title">￥{{goods.totalPrice}}</span>
                                </template>
                            </van-cell>
                        </li>
                    </ul>
                </div>
                <div slot="footer">
                    <div style="float: right;margin-bottom: 5px;">
                        <span style="color:#666;font-size:10px">共{{item.orderItems.length}}件商品
                            实付金额：</span><span style="color:#999;font-size:16px">￥{{item.totalPrice}}</span>
                    </div>
                    <div style="clear:both"></div>
                    <div style="float: left;">
                        <van-count-down v-if="gettime(item.createTime)!=0 && item.state==1"
                            :time="gettime(item.createTime)">
                            <template v-slot="timeData" format="mm:ss">
                                <span class="item">{{ timeData.minutes }}</span>
                                <span class="item">{{ timeData.seconds }}</span>
                            </template>
                        </van-count-down>
                    </div>
                    <div style="float: right;" v-if="item.state==1">

                        <van-button size="small" type="danger" @click="goorderdetail(item)">支付订单</van-button>
                    </div>
                    <div style="float: right;" v-if="item.state!=1">
                        <van-button size="small" type="info" @click="goorderdetail(item)">查看订单</van-button>
                    </div>
                    <div style="clear: both;"></div>
                </div>
            </van-panel>
        </li>
    </ul>
</template>
<style>
    .item {
        display: inline-block;
        width: 22px;
        margin-right: 5px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #1989fa;
    }
</style>
<script>
    import {
        Button,
        Toast,
        Dialog,
        Tab,
        Tabs,
        Panel,
        Tag,
        Image,
        Cell,
        Icon, CountDown
    } from "vant";
    export default {
        components: {
            [Button.name]: Button,
            [Toast.name]: Toast,
            [Dialog.name]: Dialog,
            [Tabs.name]: Tabs,
            [Tab.name]: Tab,
            [Panel.name]: Panel,
            [Tag.name]: Tag,
            [Image.name]: Image,
            [Cell.name]: Cell,
            [Icon.name]: Icon,
            [CountDown.name]: CountDown
        },
        props: {
            orderlist: {}
        },
        methods: {
            gettime(time) {
                var myDate = new Date();
                var oldDate = new Date(time);
                var dateHours = oldDate.setMinutes(oldDate.getMinutes() + 30);
                if (myDate.getTime() > dateHours) {
                    return 0;
                }
                else {
                    return dateHours - myDate.getTime()
                }
            },
            goorderdetail(item) {
                this.$router.push({ name: "orderdetail", params: { item: item } });
            }
        }
        , mounted() {
            this.orderlist.forEach(x => { window.console.log(x.imageCode.length); })
        }
    };
</script>