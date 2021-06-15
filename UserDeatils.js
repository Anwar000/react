import axios from "axios";
import React, { Component } from "react";

class UserDeatils extends Component {
  constructor() {
    super();
    this.state = {
      userdata: [],
    };
  }
  userDataGet = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      // console.log(response);
      this.setState({ userdata: response.data });
      console.log(response.data);
    });
  };
  render() {
    return (
      <div className="userBody">
        <h1>MY USERS:</h1>
        <button onClick={this.userDataGet}>Get User data</button>
        <div>
          <table>
            <tr>
              <th>ID</th>
              <th>USERID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
            {this.state.userdata.map(item => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default UserDeatils;
