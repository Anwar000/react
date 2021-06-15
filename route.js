import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import LogIn from "./logIn";
import SingUp from "./singUp";

class route extends Component {
    render() {
        return (
            <Router>

            <div>
            <Route path="/login" render={()=>{
                alert("hello")
            }} />
            <Route path="/singUP" component={SingUp} />
                
            </div>
            </Router>
        );
    }
}

export default route;