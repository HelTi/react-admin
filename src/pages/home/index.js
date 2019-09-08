import React from 'react'
import './index.scss'
import { Button, Icon } from 'antd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SideMenu from '../../components/sideMenu'
import Menus from '../../routes/routes'
import HomeIndex from '../home/home'
import OrderList from '../order/orderList'

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
      <Router>
        <div className="home-wrapper">
          <div id="sidebar" className="sidebar">
            <div className="sidebar-top">
              <p className="sidebar-top-text">Admin</p>
            </div>
            <section className="side-menu">
              <SideMenu routes={Menus} collapsed={this.state.collapsed} />
            </section>
          </div>
          <div className="main-container">
            <header className="main-header" id="main-header">
              <div className="nav-bar">
                <div className="toggle-nav-btn">
                  <Button type="primary" onClick={this.toggleCollapsed}>
                    <Icon
                      type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    />
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
            <div className="main-content">
              <Switch>
                <Route exact path="/" component={HomeIndex}></Route>
                <Route path="/order/list" component={OrderList}></Route>
                <Route render={() => <div>404</div>} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Home
