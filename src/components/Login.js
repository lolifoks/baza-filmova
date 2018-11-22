import React, { Component } from "react"
import { connect } from "react-redux";
import md5 from "md5";

import {setPassword, setLoggedIn} from '../store/actions';


class Login extends Component {

  onClickLogin = () => {
    if (md5(this.props.password) === "8fa0999540532f709fafa537818c17f1") {
      localStorage.setItem("loggedIn", "true");
      this.props.setLoggedIn(true)
    } else {
      alert("Uneli ste pogresnu lozinku");
    }
  };

  onClickLogout = () => {
    localStorage.setItem("loggedIn", "false");
    this.props.setLoggedIn(false)
  };

  render() {
   return (
    this.props.loggedIn ? (
        <button onClick={this.onClickLogout}>Logout</button>
      ) : (
        <React.Fragment>
          <input
            type="password"
            placeholder="Enter password"
            onChange={e => this.props.setPassword(e.target.value)}
          />
          <button onClick={this.onClickLogin}>Login</button>
        </React.Fragment>
      )
    )
  }
}

function mapStateToProps(state) {
  return {
    password: state.get('password'),
    loggedIn: state.get('loggedIn')
  }
}

const mapDispatchToProps = {
  setPassword, setLoggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)