import HomeIndex from '../pages/home/home'
import OrderList from '../pages/order/orderList'
import NotFindPage from '../pages/404'

const Menus = [
  {
    key: '/',
    title: '首页',
    icon: 'mail',
    component: HomeIndex
  },
  {
    key: '/order',
    title: '订单管理',
    icon: 'mail',
    subs: [
      { key: '/order/list', title: '订单列表', component: OrderList },
      { key: '/order/list1', title: '订单列表', component: OrderList },
      { key: '/order/list2', title: '订单列表', component: OrderList }
    ]
  },
  {
    key: '/assets',
    title: '资产管理',
    icon: 'mail',
    subs: [
      { key: '/assets/list', title: '资金列表', component: OrderList },
      { key: '/assets/list1', title: '项目列表', component: OrderList },
      {
        key: '/assets/list2',
        title: '资金查询',
        component: 'OrderList',
        subs: [
          { key: '/assets/query', title: '资金列表', component: OrderList },
          { key: '/assets/query2', title: '项目列表', component: OrderList },
          { key: '/assets/query3', title: '资金查询', component: OrderList }
        ]
      }
    ]
  },
  {
    key: '/order1',
    title: '订单管理',
    icon: 'mail',
    subs: [
      { key: '/order/list1', title: '订单列表', component: OrderList },
      { key: '/order/list11', title: '订单列表', component: OrderList },
      { key: '/order/list21', title: '订单列表', component: OrderList }
    ]
  },
  {
    key: '/404',
    title: '404',
    icon: 'mail',
    component: NotFindPage
  }
]

export default Menus
