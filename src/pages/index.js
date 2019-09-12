import React from 'react'
import './home/index.scss'
import SideMenu from '../components/sideMenu'
import NavHeader from '../components/navHeader'
import Menus from '../api/menus'
import CustomRouterView from '../router/CustomRouterView'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
        <div className="home-wrapper">
          <div
            style={{
              width: this.state.collapsed ? 80 : 256
            }}
            id="sidebar"
            className="sidebar"
          >
            <div className="sidebar-top">
              <p className="sidebar-top-text">Admin</p>
            </div>
            <section className="side-menu">
              <SideMenu routes={Menus} collapsed={this.state.collapsed} />
            </section>
          </div>
          <div className="main-container">
            <NavHeader
              collapsed={this.state.collapsed}
              toggleCollapsed={this.toggleCollapsed}
            />
            <div className="main-content">
              <CustomRouterView />
            </div>
          </div>
        </div>
    )
  }
}

export default Home
