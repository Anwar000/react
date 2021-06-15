import React, { Component } from "react";
import "./newUser.css"
import axios from "axios"

class singUp extends Component {
  constructor() {
    super();
    this.state = {
      fristName: "",
      lastName: "",
      gmail: "",
      mobile: "",
      password: "",
      rePassword: "",
    };
  }
  changeHandle = (event) => {
    
    const name =event.target.name;
    const value= event.target.value;
    this.setState({ [name]: value });
  };
  singUpData = (e) => {
    e.preventDefault()
    const data= this.state;
    
    axios.post("https://jsonplaceholder.typicode.com/posts",data)
    .then((res)=>{
      console.log(res);
    })
    .catch()

  };
  render() {
    return (
      <div className ="userBody">
        <h1>Add NewUser Here:</h1>
        <hr/>
        <form className="inputStyle">
          <input
            type="text"
            placeholder="fristName"
            value={this.state.fristName}
            onChange={this.changeHandle}
            name="fristName"
          />
          <br /><br/>
          <input
            type="text"
            placeholder="lastName"
            value={this.state.lastName}
            onChange={this.changeHandle}
            name="lastName"
          />
          <br /><br/>
          <input
            type="text"
            placeholder="@gmail.com"
            value={this.state.gmail}
            onChange={this.changeHandle}
            name="gmail"
          /> 
          <br /><br/>
          <input
            type="text"
            placeholder="+91 mobileNumber"
            value={this.state.mobile}
            onChange={this.changeHandle}
            name="mobile"
          />
          <br /><br/>
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.changeHandle}
            name="password"
          />
          <br /><br/>
          <input
            type="password"
            placeholder="re-password"
            value={this.state.rePassword}
            onChange={this.changeHandle}
            name="rePassword"
          />
          <br /><br/>
          <button className="loginButton" onClick={this.singUpData}>SINGUP</button>
        </form>
      </div>
    );
  }
}

export default singUp;
