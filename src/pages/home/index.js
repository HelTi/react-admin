import React from 'react'

class Home extends React.Component {
  goLogin = () => {
    const { history } = this.props
    console.log(this.props)
    history.push('/login')
  }
  render() {
    return (
      <div>
        <button onClick={this.goLogin}>login</button>
      </div>
    )
  }
}

export default Home
