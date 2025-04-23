import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import daikuanchanpin from '@/views/modules/daikuanchanpin/list'
    import daikuanchanpinLiuyan from '@/views/modules/daikuanchanpinLiuyan/list'
    import daikuanchanpinOrder from '@/views/modules/daikuanchanpinOrder/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import jianguanuyuan from '@/views/modules/jianguanuyuan/list'
    import liuyan from '@/views/modules/liuyan/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryDaikuanchanpin from '@/views/modules/dictionaryDaikuanchanpin/list'
    import dictionaryDaikuanchanpinOrderYesno from '@/views/modules/dictionaryDaikuanchanpinOrderYesno/list'
    import dictionaryDaikuanzhouqi from '@/views/modules/dictionaryDaikuanzhouqi/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryDaikuanchanpin',
        name: '产品类型',
        component: dictionaryDaikuanchanpin
    }
    ,{
        path: '/dictionaryDaikuanchanpinOrderYesno',
        name: '申请状态',
        component: dictionaryDaikuanchanpinOrderYesno
    }
    ,{
        path: '/dictionaryDaikuanzhouqi',
        name: '贷款周期',
        component: dictionaryDaikuanzhouqi
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/daikuanchanpin',
        name: '贷款产品',
        component: daikuanchanpin
      }
    ,{
        path: '/daikuanchanpinLiuyan',
        name: '贷款产品评论',
        component: daikuanchanpinLiuyan
      }
    ,{
        path: '/daikuanchanpinOrder',
        name: '贷款申请',
        component: daikuanchanpinOrder
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/jianguanuyuan',
        name: '监管员',
        component: jianguanuyuan
      }
    ,{
        path: '/liuyan',
        name: '意见反馈',
        component: liuyan
      }
    ,{
        path: '/news',
        name: '新闻信息',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
