import React from "react";
import Dish from "./Dish";
import greekSalad from "../images/greek_salad.jpg"

function Main(){
    var dishes = [{src:greekSalad, name:"Greek Salad", price:"$10", description:"Very good salad, few calories!", rating:5.0},
    {src:greekSalad, name:"Greek Salad", price:"$10", description:"Very good salad, few calories!", rating:5.0},
    {src:greekSalad, name:"Greek Salad", price:"$10", description:"Very good salad, few calories!", rating:5.0}];
    return <main>
        <div className="articles">
            <h1>Specials</h1>
        <div className="dishContainer">
            {dishes.map(dish=><Dish src={dish.src} name = {dish.name} price = {dish.price} description={dish.description} rating={dish.rating}></Dish>)}
        </div>
        </div>
    </main>
}

export default Main;