import React from "react";
import logo from "../images/Logo .svg"

function Footer(){
    var navigation = ["Home", "About", "Menu", "Reservation","Order Online", "Login"];
    var contact = ["Address", "Phone Number", "Email"];
    var socialLinks = ["Address", "Phone Number", "Email"];
    return <footer className = "footerContainer">
    <img src = {logo}></img>
    <div>
        <h3>Navigation</h3>
        <ul>
            {navigation.map(item=><li>{item}</li>)}
        </ul>
    </div>
    <div>
        <h3>Contact</h3>
        <ul>
            {contact.map(item=><li>{item}</li>)}
        </ul>
    </div>
    <div>
        <h3>Social Media</h3>
        <ul>
            {socialLinks.map(item=><li>{item}</li>)}
        </ul>
    </div>
    </footer>
}

export default Footer;