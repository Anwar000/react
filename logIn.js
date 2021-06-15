import React, { Component } from "react";
import "./LogInStyle.css";

import MainPage from "./mainPage";

class logIn extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      isLogIn: false,
    };
  }
  changeHandleData = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  logInHandle = () => {
    this.state.userName && this.state.password
      ? this.setState({ isLogIn: true })
      : alert("enterdeatils");
  };
  onLogout=()=>{
    this.resetstate()
  }
  resetstate=()=>{
    this.setState({
      userName: "",
      password: "",
      isLogIn: false,
    })
    

  }
  render() {
    if (!this.state.isLogIn) {
      return (
        <div className="logInPage">
          <form className="inputStyle">
            <input
              type="text"
              placeholder="userName"
              name="userName"
              value={this.state.userName}
              onChange={this.changeHandleData}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandleData}
            />
            <br />
            <br />
            <button className="loginButton" onClick={this.logInHandle}>
              SUBMIT
            </button>
          </form>
        </div>
      );
    }
    return (
      <MainPage onLogout={this.onLogout}/>
    )
  }
  
}

export default logIn;
