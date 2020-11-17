<template>
    <div>
        <van-nav-bar title="订单详情" left-arrow @click-left="back()" />
        <van-cell :value="item.state==1?'未支付':item.state==2 ? '已完成':item.state==3 ?'已关闭':''" :label="item.orderNo">
            <template slot="title">
                <span class="custom-title" style="color:#666;font-size:12px;">{{item.time}}</span>
            </template>
        </van-cell>
        <van-collapse v-model="activeName">
            <van-collapse-item title="订单明细" name="1">
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
                <div style="float: right;margin-bottom: 5px;">
                    <span style="color:#666;font-size:10px">共{{item.orderItems.length}}件商品
                        实付金额：</span><span style="color:#999;font-size:16px">￥{{item.totalPrice}}</span>
                </div>
                <div style="clear:both"></div>
            </van-collapse-item>
            <van-collapse-item title="订单日志" name="2">
                <van-steps direction="vertical" :active="active">
                    <van-step v-for="log in item.orderLogs" :key="log.logContent">
                        <h5>{{log.logContent}}</h5>
                    </van-step>
                </van-steps>

            </van-collapse-item>
        </van-collapse>

        <van-tabbar v-model="active" v-if="item.state==1">
            <van-button type="danger" @click="orderpay" size="large">确认支付</van-button>
        </van-tabbar>
    </div>
</template>
<script>
    import global from "../../common";
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
        NavBar,
        Collapse,
        CollapseItem,
        Step, Steps,
        Tabbar,
        TabbarItem,
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
            [NavBar.name]: NavBar,
            [Collapse.name]: Collapse,
            [CollapseItem.name]: CollapseItem,
            [Step.name]: Step,
            [Steps.name]: Steps,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
        },
        data: function () {
            return {
                active: 0,
                activeName: ['1'],
                item: {
                    createTime: "",
                    id: "",
                    orderItems: [],
                    orderLogs: [],
                    orderNo: "",
                    state: 0,
                    time: "",
                    totalPrice: ""
                }
            }
        },
        methods: {
            back() {
                history.back(-1);
            },
            orderpay() {
                var router = this.$router;
                global.ajaxPost("/api/orderservice/orderpay/excute", { OrderId: this.item.id }, function (result) {
                    if (result.code == 0) {
                        Toast({
                            message: "订单支付成功", duration: 1500, onClose: function () {
                                router.push({ name: "orderlist", params: { type: 2 } })
                            }
                        });
                    }
                });
            }
        },
        mounted() {
            if (this.$route.params.item != undefined) {
                this.item.createTime = this.$route.params.item.createTime;
                this.item.id = this.$route.params.item.id;
                this.item.orderItems = this.$route.params.item.orderItems;
                this.item.orderLogs = this.$route.params.item.orderLogs;
                this.item.orderNo = this.$route.params.item.orderNo;
                this.item.state = this.$route.params.item.state;
                this.item.time = this.$route.params.item.time;
                this.item.totalPrice = this.$route.params.item.totalPrice;
            }
        }
    };
</script>