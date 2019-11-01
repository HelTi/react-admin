import React from "react";
import "./index.scss";
import { Breadcrumb } from "antd";

import { withRouter } from "react-router-dom";

class ContentBreadCrumb extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="content-breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Application Center</Breadcrumb.Item>
          <Breadcrumb.Item>Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default withRouter(ContentBreadCrumb);
