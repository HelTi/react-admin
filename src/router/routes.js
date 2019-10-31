import Home from "../pages/home/index";
import OrderList from "../pages/order/orderList";

import G2Chart from "../components/g2charts/g2Chart";
import ChartJs from "../components/chart-js/ChartJs";
import SsoApplication from "../pages/sso/application";

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
      { key: "/home/data/chartjs", name: "chartjs图表", component: ChartJs },
      { key: "/home/data/list2", name: "订单列表", component: OrderList }
    ]
  },
  {
    title: "应用卡片",
    key: "/home/sso",
    subs: [
      {
        key: "/home/sso/application",
        name: "sso_application",
        component: SsoApplication
      }
    ]
  }
];

export default Menus;
