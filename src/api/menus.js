/**
 * 左侧菜单单独抽离作为资源，通常从后端根据角色拉取菜单
 */
const Menus = [
  {
    key: "/home",
    title: "工作看板",
    icon: "dashboard"
  },
  {
    title: "数据图表",
    key: "/home/data",
    icon: "bar-chart",
    subs: [
      { key: "/home/data/g2", title: "G2图表" },
      { key: "/home/data/chartjs", title: "chartjs" }
    ]
  },
  {
    title: "应用管理",
    key: "/home/app",
    icon: "appstore",
    subs: [
      { key: "/home/app/list", title: "应用列表" },
      {
        key: "/home/app/list1",
        title: "应用服务",
        subs: [
          { key: "/home/app/list1/g2", title: "G2图表" },
          { key: "/home/app/list1/chartjs", title: "chartjs" }
        ]
      }
    ]
  }
];

export default Menus;
