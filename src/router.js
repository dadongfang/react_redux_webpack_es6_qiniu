import Loadable from 'react-loadable'
import Loading from './components/Loading'

const Home = Loadable({loader: ()=> import('./containers/Home'), loading: Loading})
const Parent = Loadable({loader: ()=> import('./components/Parent'), loading: Loading}) // 父级路由组件
const UserManager = Loadable({loader: ()=> import('./containers/UserManager'), loading: Loading})
const TrumpetList = Loadable({loader: ()=> import('./containers/Trumpet/List'), loading: Loading})

const routerConfig = [
	{
		path: '/',
    exact: true,
    component: Home,
    data: {
      title: '首页',
      icon: 'home',
      showAlways: true
    }
	},
	{
    path: '/user',
    exact: true,
		component: UserManager,
    data: {
      id: '10000',
      title: '用户管理',
      icon: 'team',
      permissions: [{
        id: '10001',
        name: '查询'
      }, {
        id: '10002',
        name: '新增'
      }, {
        id: '10003',
        name: '导入'
      }, {
        id: '10004',
        name: '修改'
      }, {
        id: '10005',
        name: '删除'
      }, {
        id: '10006',
        name: '重置密码'
      }, {
        id: '10007',
        name: '锁定用户'
      }, {
        id: '10008',
        name: '激活用户'
      }, {
        id: '10009',
        name: '获取组织机构列表'
      }, {
        id: '10010',
        name: '获取角色列表'
      }, {
        id: '10011',
        name: '导出'
      }, {
        id: '10012',
        name: '修改个人密码'
      }]
    }
	},
	{
    path: '/log',
    exact: true,
		component: Home,
    data: {
      id: '10000',
      title: '系统日志',
      icon: 'file-text',
      hide: true
    }
	},
	{
    path: '/trumpet',
		component: Parent,
    data: {
      id: '10000',
      redirect: '/trumpet/list',
      title: '小号中心',
      icon: 'appstore-o',
      hide: false
    },
		routes: [
			{
				path: '/trumpet/list',
        exact: true,
				component: TrumpetList,
        data: {
          id: '10000',
          title: '小号管理',
          icon: 'home'
        }
			},
			{
				path: '/trumpet/customer',
        exact: true,
				component: Home,
        data: {
          id: '10000',
          title: '客户管理',
          icon: 'home'
        }
			},
			{
				path: '/trumpet/callRecord',
        exact: true,
				component: Home,
        data: {
          id: '10000',
          title: '通话记录',
          icon: 'home'
        }
			},
			{
				path: '/trumpet/bindRecord',
        exact: true,
				component: Home,
        data: {
          id: '10000',
          title: '绑定记录',
          icon: 'home'
        }
			}
		]
  },
  {
    component: Home
  }
]

export default routerConfig
