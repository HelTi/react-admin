import React from 'react'
import './index.scss'
import { Button, Icon } from 'antd'
import SideMenu from '../../components/sideMenu'
import Menus from '../../routes/routes'

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
        <div id="sidebar" className="sidebar">
          <div className="sidebar-top">
            <p className="sidebar-top-text">Admin</p>
          </div>
          <section>
            <SideMenu routes={Menus} collapsed={this.state.collapsed} />
          </section>
        </div>
        <div className="main-container">
          <div>
            <Button
              type="primary"
              onClick={this.toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
          </div>
          <div className="main-content">content</div>
        </div>
      </div>
    )
  }
}

export default Home
