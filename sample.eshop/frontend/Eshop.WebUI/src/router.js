import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    name: 'user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'foundrecord',
    component: () => import('./view/user/foundrecord'),
    meta: {
      title: '资金记录'
    }
  },
  {
    name: 'recharge',
    component: () => import('./view/user/recharge'),
    meta: {
      title: '账户充值'
    }
  },
  {
    name: 'login',
    component: () => import('./view/user/login'),
    meta: {
      title: '登录'
    }
  },
  {
    name: 'manager',
    component: () => import('./view/manager/index'),
    meta: {
      title: '管理端'
    }
  },
  {
    name: 'managerdetail',
    component: () => import('./view/manager/detail'),
    meta: {
      title: '管理端-新增/编辑商品'
    }
  },
  {
    name: 'cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情'
    }
  },
  {
    name: 'index',
    component: () => import('./view/goods/list'),
    meta: {
      title: '商城首页'
    }
  },
  {
    name: 'orderlist',
    component: () => import('./view/user/order/orderlist'),
    meta: {
      title: '我的订单'
    }
  },
  {
    name: 'orderdetail',
    component: () => import('./view/user/order/orderdetail'),
    meta: {
      title: '订单详情'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
