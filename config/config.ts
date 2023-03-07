import { defineConfig } from '@umijs/max';
import { ThemeConfig } from 'antd';

export default defineConfig({
  antd: {
    theme: {
      token: {
        colorPrimary: '#46C0C6',
      },
    } as ThemeConfig,
  },
  access: {},
  model: {},
  initialState: {},
  title: 'Bee work',
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          name: '登录',
          component: './user/Login',
        },
        {
          path: '/user/forget/password',
          name: '忘记密码',
          component: './user/Login/ForgetPassword',
        },
      ],
    },
    { path: '/', redirect: '/home' },
    {
      path: '/',
      component: '../layouts/CommonLayout',
      routes: [
        {
          path: 'home',
          name: '首页',
          component: './Home',
        },
        {
          name: '系统消息',
          path: '/message/:id',
          component: './Message',
        },
        {
          name: '学习帮助',
          path: '/study/:id',
          component: './Study',
        },
        {
          name: '会员购买',
          path: '/member',
          component: './Member',
        },
        {
          name: '邮箱购买',
          path: '/email',
          routes: [
            {
              path: 'exchange',
              component: './email/Exchange',
            },
            {
              path: 'list',
              component: './email/List',
              name: '查看',
            },
            { path: '', redirect: 'exchange' },
          ],
        },
        {
          name: '海外问卷(口子查)',
          path: '/question',
          component: './Question',
        },
        {
          name: '卡券回收',
          path: '/coupon',
          component: './Coupon',
        },
        {
          path: '/user',
          name: '用户中心',
          routes: [
            {
              component: './user/Center',
              path: 'center',
            },
            {
              component: './user/Info',
              path: 'info',
              name: '用户资料',
            },
            {
              component: './user/Withdraw',
              path: 'withdraw',
              name: '余额提现',
            },
            {
              component: './user/Account',
              path: 'account',
              name: '账号安全',
            },
            {
              component: './user/Rebate',
              path: 'rebate',
              name: '返利明细',
            },
            {
              component: './user/Funds',
              path: 'funds',
              name: '资金明细',
            },
            {
              path: '',
              redirect: 'center',
            },
          ],
        },
      ],
    },

    // {
    //   name: '首页',
    //   path: '/home',
    //   component: './Home',
    // },
    // {
    //   name: '系统消息',
    //   path: '/message/:id',
    //   component: './Message',
    // },
    // {
    //   name: '学习帮助',
    //   path: '/study/:id',
    //   component: './Study',
    // },
    // {
    //   name: '会员购买',
    //   path: '/member',
    //   component: './Member',
    // },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    //   parentKey: ['/home'],
    // },
    // {
    //   name: ' CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
  ],
  npmClient: 'pnpm',
  request: {},
  styledComponents: {},
  proxy: {
    '/api/': {
      // target: 'http://uat-server-wallet-admin.ydmnet.com',
      target: 'http://192.168.2.100:10012',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
