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
    title: "应用卡片",
    key: "/home/sso",
    icon: "appstore",
    subs: [{ key: "/home/sso/application", title: "应用管理" }]
  }
];

export default Menus;
