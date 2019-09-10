import Home from '../pages/home/index'
import OrderList from '../pages/order/orderList'

const Menus = [
  {
    key: '/home',
    title: '首页',
    icon: 'appstore',
    component: Home
  },
  {
    title: '订单管理',
    key: '/home/order',
    icon: 'shopping',
    subs: [
      { key: '/home/order/list', title: '订单列表', component: OrderList },
      { key: '/home/order/list1', title: '订单列表', component: OrderList },
      { key: '/home/order/list2', title: '订单列表', component: OrderList }
    ]
  }
]

export default Menus
