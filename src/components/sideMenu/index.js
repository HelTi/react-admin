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
  constructor(props) {
    super(props)
    const { location } = props
    const pathname = location.pathname
    const splicePath = pathname.substr(0, pathname.lastIndexOf('/'))
    const openKeys = splicePath === '' ? null : [splicePath]

    this.state = {
      selectedKeys: [pathname],
      openKeys: openKeys
    }
  }

  handleClick = e => {
    this.setState({
      selectedKeys: [e.key]
    })
  }

  onOpenChange = openKeys => {
    const uniqueOpened = !!this.props.uniqueOpend
    if (uniqueOpened) {
      if (openKeys.length === 0) {
        this.setState({
          openKeys: []
        })
        return
      } else {
        const latestOpenKeys = openKeys[openKeys.length - 1]
        if (latestOpenKeys === openKeys[0]) {
          this.setState({
            openKeys
          })
        } else {
          this.setState({
            openKeys: [latestOpenKeys]
          })
        }
      }
    } else {
      this.setState({
        openKeys: openKeys
      })
    }
  }

  render() {
    const { routes } = this.props
    const collapsed = this.props.collapsed
    return (
      <Menu
        onClick={this.handleClick}
        onOpenChange={this.onOpenChange}
        selectedKeys={this.state.selectedKeys}
        openKeys={this.state.openKeys}
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
