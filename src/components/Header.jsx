import React from "react";
import food from "../images/restauranfood.jpg"

function Header(){
    return <div className="headerDiv">
        <header className="container">
        <div className="headerGrid">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            <button class="reserveButton">Reserve a Table</button>
        </div>
        <img  className="headerImg" src = {food}></img>
    </header>
    </div>
}

export default Header;
