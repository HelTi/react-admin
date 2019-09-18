import Home from '../pages/home/index'
import OrderList from '../pages/order/orderList'
import TodoApp from '../pages/todo-app/index'

const Menus = [
  {
    key: '/home',
    title: '首页',
    icon: 'appstore',
    exact: true,
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
  },
  {
    title: '数据报表',
    key: '/home/data',
    icon: 'shopping',
    subs: [
      { key: '/home/data/list', title: '订单列表', component: OrderList },
      { key: '/home/data/list1', title: '订单列表', component: OrderList },
      { key: '/home/data/list2', title: '订单列表', component: OrderList }
    ]
  },
  {
    title: '小应用',
    key: '/home/app',
    icon: 'shopping',
    subs: [
      { key: '/home/app/todo', title: 'TodoApp', component: TodoApp }
    ]
  }
]

export default Menus
