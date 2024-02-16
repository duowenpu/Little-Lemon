import React from "react";
import logo from "../images/Logo .svg"

function Nav(){
    return (
        <nav>
            <img src = {logo} alt="Logo"></img>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">MENU</a></li>
                <li><a href="/">RESERVATION</a></li>
                <li><a href="/">ORDER ONLINE</a></li>
                <li><a href="/">LOGIN</a></li>
            </ul>
        </nav>
    )
}

export default Nav;