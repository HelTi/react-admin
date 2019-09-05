import React from 'react'
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu

const renderMenuItem = item => (
  <Menu.Item key={item.key}>
    {item.icon && <Icon type={item.icon} />}
    <span>{item.title}</span>
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
    this.state = {}
  }
  handleClick = e => {
    console.log('click ', e)
  }

  render() {
    const { routes } = this.props
    const collapsed = this.props.collapsed
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
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

export default SideMenu
