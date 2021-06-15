import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AddNewUser from "./addNewUser";
import HomePage from "./homePage";
import UserDeatils from "./UserDeatils";
import Course from "./course";
import About from "./about";

class mainPage extends Component {
  render() {
    return (
      <Router>
        <div>
            <div className="mainPageHeadder">
            <h1>HELLO ANWAR !</h1>
            <hr />
            </div>
          
          <nav className="navBar">
            <ul>
              <li>
                <Link to="homepage">HomePage</Link>
              </li>
              <li>
                <Link to="/UserDeatils">USERDEATILS</Link>
              </li>
              <li>
                <Link to="/course">COURSE</Link>
              </li>
              <li>
                <Link to="/addnewuser">AddNewUser</Link>
              </li>
              <li>
                <Link to="about">ABOUT</Link>
              </li>
            </ul>
          </nav>
          <Route path="/addnewuser" component={AddNewUser} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/userdeatils" component={UserDeatils} />
          <Route path="/course" component={Course} />
          <Route path="/about" component={About} />
        </div>

        <footer>
          <h3></h3>
        </footer>
      </Router>
    );
  }
}

export default mainPage;
