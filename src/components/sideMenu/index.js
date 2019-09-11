import React from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
const { SubMenu } = Menu

const renderMenuItem = item => (
  <Menu.Item key={item.key}>
    <Link to={item.key}>
      {item.icon && <Icon type={item.icon} />}
      <span>{item.title}</span>
    </Link>
  </Menu.Item>
)

const renderMenuItemGroup = item => (
  <Menu.ItemGroup key={item.key} title={item.title}>
    {item.subs.map(sub => renderMenuItem(sub))}
  </Menu.ItemGroup>
)

const renderSubMenu = item => (
  <SubMenu
    key={item.key}
    title={
      <span>
        <Icon type={item.icon} />
        <span>{item.title}</span>
      </span>
    }
  >
    {item.subs.map(item =>
      item.subs ? renderMenuItemGroup(item) : renderMenuItem(item)
    )}
  </SubMenu>
)

class SideMenu extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const { location } = props
    const pathname = location.pathname
    const splicePath = pathname.substr(0, pathname.lastIndexOf('/'))
    const openKeys = splicePath === '' ? null : [splicePath]

    return {
      selectedKeys: [pathname],
      openKeys: openKeys
    }
  }
  state = {
    selectedKeys: [],
    openKeys: null
  }
  handleClick = e => {
    console.log('click ', e)
  }

  render() {
    console.log('state', this.state)
    const { routes } = this.props
    const collapsed = this.props.collapsed
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={this.state.selectedKeys}
        defaultOpenKeys={this.state.openKeys}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {routes.map(route =>
          route.subs ? renderSubMenu(route) : renderMenuItem(route)
        )}
      </Menu>
    )
  }
}

export default withRouter(SideMenu)
