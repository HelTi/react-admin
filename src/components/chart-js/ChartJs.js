import React from "react";
import { Row, Col } from "antd";
import Bar from "./Bar";
import Pie1 from "./Pie1";
import CardTab from "./CartTab";
import Series1 from "../g2charts/Series1";

class ChartJs extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="admin-col-padding" md={18} sm={24} xs={24}>
            <Series1 />
          </Col>
          <Col className="admin-col-padding" md={6} sm={24} xs={24}>
            <CardTab />
          </Col>
        </Row>
        <Row>
          <Col className="admin-col-padding" md={12} sm={24} xs={24}>
            <Bar />
          </Col>
          <Col className="admin-col-padding" md={12} sm={24} xs={24}>
            <Pie1 />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChartJs;
