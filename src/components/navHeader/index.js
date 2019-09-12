import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Icon, Popover, Avatar } from 'antd'

class NavHeader extends React.Component {
  loginOut = () => {
    const { history } = this.props
    localStorage.removeItem('ant_token')
    history.push('/login')
  }
  render() {
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    )
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
            <Button type='link' onClick={this.props.toggleCollapsed}>
              <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
          </div>
          <div className="navbar-menu">
            <div className="navbar-nav">
              <div>HElti</div>
              <div>
                <Button
                  type="link"
                  onClick={this.loginOut}
                  icon="logout"
                ></Button>
              </div>
              <div>
                <Popover placement="bottom" content={content} trigger="click">
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(NavHeader)
