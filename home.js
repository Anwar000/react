import logo from "./logo.svg";

import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import LogIn from "./logIn";


class singUp extends Component {
  constructor() {
    super();
    this.state = {
      clickToLogin: false,
    };
  }
  handleLogIn = () => {
    this.setState({ clickToLogin: true });
  };
  onLog = () => {
    this.resetState();
  };

  resetstate = () => {
    this.setState({ clickToLogin: false });
    
  };
  render() {
    if (!this.state.clickToLogin) {
      return (
        <Router>
          <div className="App">
            <header className="App-header">
              <h1>HELLO ANWAR!</h1>

              <img src={logo} className="App-logo" alt="logo" />
              <button id="logINStyle" onClick={this.handleLogIn}>
                <Link to="/login">LOGIN</Link>
              </button>
              <br />
            </header>
          </div>
        </Router>
      );
    }
    return (
      <div>
        <LogIn onlog={this.onLog} />
      </div>
    );
  }
}

export default singUp;
