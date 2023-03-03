import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onClickSubmit = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const updateApi = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(updateApi),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onClickSubmit(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="container-bg">
        <form onSubmit={this.onClickLogin} className="form-container">
          <h1>Please Login</h1>
          <button type="submit">Login with Sample Creds</button>
        </form>
      </div>
    )
  }
}

export default Login
