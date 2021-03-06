import React, { Component } from "react";
import "../styles/logIn.css"
// import logo from "../images/logo.svg"
import logo from "../images/handsworld.png"
import LogInForm from "../components/logInForm"


class LogIn extends Component {
    render() {
        return (
            <div>
                <nav id="header" className="navbar navbar-expands" ></nav>
                <div id="title" >
                    <img id="logoImg" src={logo} alt=""/>
                    <span id="brand" >Friendly</span>
                </div>
                <LogInForm />
            </div>
        )
    }
}

export default LogIn