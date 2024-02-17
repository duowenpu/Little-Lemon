import React, {useState} from "react";
import './Main.css';
import "./Booking.css";
import Nav from './components/Nav';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Header from './components/Header';

function BookingForm(props){
    var [state, setState] = useState({resDate:"2024-02-16", resTime:"", guests:"", occation:""});
    var availableTimes = props.availableTimes;
    function handleChange(event){
        var {name,value} = event.target;
        // console.log(typeof(value));
        if(name == "resDate"){
            props.dispatch(value);
        }
        console.log(name,value);
        setState((prevValue)=>{
            return {...prevValue, [name]:value}
        })
    }
    return (
        <div className="App">
        <Nav></Nav>
        <div className="booking">
        <div className="bookingForm">
        <form style={{display: "grid",  maxWidth: "200px",  gap: "20px"}}>
            <label for="res-date">Choose date</label>
            <input onChange={handleChange} name="resDate" type="date" id="res-date" value={state.resDate} />
            <label for="res-time">Choose time</label>
            <select name="resTime" id="res-time " value = {state.resTime} onChange={handleChange}>
                {availableTimes.map(item=><option>{item}</option>)}
            </select>
            <label for="guests">Number of guests</label>
            <input name="guests" type="number" placeholder="1" min="1" max="10" id="guests" value={state.guests} onChange={handleChange}/>
            <label for="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={state.occation} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" onClick={()=>{props.submits(state)}} value="Make Your reservation" />
        </form>
        </div>
        </div>
        <Footer></Footer>
    </div>
    )
}

export default BookingForm;