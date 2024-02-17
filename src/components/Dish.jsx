import React from "react";

function Dish(props){
    return (
        <div className="dishC">
            <img src={props.src}></img>
            <div className="dish">
                
                <div className="namePrice">
                    <h2>{props.name}</h2>
                    <h2 className='price'>{props.price}</h2>
                </div>
                <p>{props.description}</p>
                <h2>Rating {props.rating}</h2>
            </div>
        </div>
    )
}
export default Dish;