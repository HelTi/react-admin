import React from "react";
import Menus from "../../api/menus";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";
const { SubMenu } = Menu;

/**
 *
 * 浏览器刷新展开三级菜单
 */
const getRootSubMenuKeys = menus => {
  let result = [];
  menus.forEach(menu => {
    if (menu.key && menu.subs) {
      result.push(menu.key);
      menu.subs && (result = result.concat(getRootSubMenuKeys(menu.subs)));
    }
  });
  return result;
};

/**
 *  点击三级菜单展开问题
 */
const rootLevel2MenuKeys = Menus.reduce((subKeys, menu) => {
  return subKeys.concat(menu.subs && menu.key).filter(Boolean);
}, []);

const rootSubmenuKeys = getRootSubMenuKeys(Menus);

const renderMenuItem = item => (
  <Menu.Item key={item.key}>
    <Link to={item.key}>
      {item.icon && <Icon type={item.icon} />}
      <span>{item.title}</span>
    </Link>
  </Menu.Item>
);

// const renderMenuItemGroup = item => (
//   <Menu.ItemGroup key={item.key} title={item.title}>
//     {item.subs.map(sub => renderMenuItem(sub))}
//   </Menu.ItemGroup>
// )

const renderSubMenu = item => (
  <SubMenu
    key={item.key}
    title={
      <span>
        {item.icon && <Icon type={item.icon} />}
        <span>{item.title}</span>
      </span>
    }
  >
    {item.subs.map(item =>
      item.subs ? renderSubMenu(item) : renderMenuItem(item)
    )}
  </SubMenu>
);

class SideMenu extends React.Component {
  rootSubmenuKeys = rootSubmenuKeys;
  rootLevel2MenuKeys = rootLevel2MenuKeys;
  state = {
    mode: "inline",
    openKey: [],
    selectedKey: "",
    firstHide: true // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
  };

  static getDerivedStateFromProps(props, state) {
    if (props.collapsed !== state.collapsed) {
      const state1 = SideMenu.setMenuOpen(props);
      console.log("state1", state1);
      const state2 = SideMenu.onCollapse(props.collapsed);
      return {
        ...state1,
        ...state2,
        firstHide: state.collapsed !== props.collapsed && props.collapsed, // 两个不等时赋值props属性值否则为false
        openKey: [state.openKey] || (!props.collapsed && [state1.openKey])
      };
    }
    return null;
  }

  static setMenuOpen = props => {
    const { pathname } = props.location;
    let getOpenKeyFromPath = rootSubmenuKeys.filter(
      key => pathname.indexOf(key) !== -1
    );
    console.log("checkOpenKey", getOpenKeyFromPath);
    console.log("pathname", pathname);
    return {
      openKey: getOpenKeyFromPath
        ? getOpenKeyFromPath
        : [pathname.substr(0, pathname.lastIndexOf("/"))],
      selectedKey: pathname
    };
  };
  static onCollapse = collapsed => {
    return {
      collapsed,
      // firstHide: collapsed,
      mode: collapsed ? "vertical" : "inline"
    };
  };

  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
  };

  componentDidMount() {
    // this.setMenuOpen(this.props);
    const state = SideMenu.setMenuOpen(this.props);
    this.setState(state);
  }

  onOpenChange = openKeys => {
    console.log("openKeys", openKeys);
    const latestOpenKey = openKeys.find(
      key => this.state.openKey.indexOf(key) === -1
    );

    if (this.rootLevel2MenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({
        openKey: openKeys,
        firstHide: false
      });
    } else {
      this.setState({
        openKey: latestOpenKey ? [latestOpenKey] : [],
        firstHide: false
      });
    }
  };

  render() {
    const { routes } = this.props;
    const collapsed = this.props.collapsed;
    const { selectedKey, openKey, firstHide } = this.state;
    return (
      <Menu
        inlineCollapsed={collapsed}
        theme={this.props.themeType}
        menus={routes.menus}
        onClick={this.menuClick}
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={firstHide ? null : openKey}
        onOpenChange={this.onOpenChange}
      >
        {routes.map(route =>
          route.subs ? renderSubMenu(route) : renderMenuItem(route)
        )}
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  const { theme } = state;
  return theme;
};

export default connect(mapStateToProps)(withRouter(SideMenu));
