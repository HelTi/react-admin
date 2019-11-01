import Home from "../pages/home/index";

import G2Chart from "../components/g2charts/g2Chart";
import ChartJs from "../components/chart-js/ChartJs";
import Application from "../pages/sso/application";

const Menus = [
  {
    key: "/home",
    name: "首页",
    exact: true,
    component: Home
  },
  {
    title: "数据报表",
    key: "/home/data",
    subs: [
      { key: "/home/data/g2", name: "G2图表", component: G2Chart },
      { key: "/home/data/chartjs", name: "chartjs图表", component: ChartJs }
    ]
  },
  {
    title: "应用卡片",
    key: "/home/app",
    subs: [
      {
        key: "/home/app/list",
        name: "application_list",
        component: Application
      }
    ]
  }
];

export default Menus;
