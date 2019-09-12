/**
 * 左侧菜单单独抽离作为资源，通常从后端根据角色拉取菜单
 */
const Menus = [
  {
    key: '/home',
    title: '首页',
    icon: 'appstore'
  },
  {
    title: '订单管理',
    key: '/home/order',
    icon: 'shopping',
    subs: [
      { key: '/home/order/list', title: '订单列表' },
      { key: '/home/order/list1', title: '订单列表' },
      { key: '/home/order/list2', title: '订单列表' }
    ]
  },
  {
    title: '数据报表',
    key: '/home/data',
    icon: 'shopping',
    subs: [
      { key: '/home/data/list', title: '订单列表' },
      { key: '/home/data/list1', title: '订单列表' },
      { key: '/home/data/list2', title: '订单列表' }
    ]
  }
]

export default Menus
