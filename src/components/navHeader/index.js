import React from 'react'
import { Button, Icon } from 'antd'

class NavHeader extends React.Component {
  render() {
    return (
      <header
        className="main-header"
        id="main-header"
        style={{
          left: this.props.collapsed ? 80 : 256
        }}
      >
        <div className="nav-bar">
          <div className="toggle-nav-btn">
            <Button onClick={this.props.toggleCollapsed}>
              <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
          </div>
          <div className="navbar-menu">
            <div className="navbar-nav">
              <div>HElti</div>
              <div>LoginOut</div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default NavHeader
