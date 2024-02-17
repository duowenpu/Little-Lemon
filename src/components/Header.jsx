import React from "react";
import food from "../images/restauranfood.jpg"
import { Link } from "react-router-dom";

function Header(){
    return <div className="headerDiv">
        <header className="container">
        <div className="headerGrid">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            <Link to = "/BookingForm"><button className="reserveButton">Reserve a Table</button></Link>
        </div>
        <img  className="headerImg" src = {food}></img>
    </header>
    </div>
}

export default Header;
