import React from "react";

function Dish(props){
    return (
        <div>
            <img src={props.srce}></img>
            <div className="namePrice">
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            </div>
            <p>{props.description}</p>
            <h2>Rating {props.rating}</h2>
        </div>
    )
}