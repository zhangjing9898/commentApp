import React from 'react'

export default class LoginForm extends React.Component {
  constructor({ match }) {
    super()
    this.state = {
      username: ''
    }
  }

  changeHandle(e) {
    this.setState({
      username: e.target.value
    })
  }

  clickHandle() {
    const username = this.state.username
    const loginHandle = this.props.loginHandle
    loginHandle(username);
  }

  render() {
    return (
      <div id="login-container">
        <div className="input-container phone-container">
          <i className="icon-tablet"></i>
          <input
            type="text"
            name="phoneNumber"
            placeholder="输入手机号"
            onChange={this.changeHandle.bind(this)}
            value={this.state.username}
          />
        </div>
        <div className="input-container password-container">
          <i className="icon-key"></i>
          <button>发送验证码</button>
          <input type="text" name="code" placeholder="输入验证码"/>
        </div>
        <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
      </div>
    )
  }
}
