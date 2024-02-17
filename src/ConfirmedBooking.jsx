import React, {useState} from "react";
import './Main.css';
import "./Booking.css";
import Nav from './components/Nav';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Header from './components/Header';

function ConfirmedBooking(){
    return <div className="App">
    <Nav></Nav>
    <h1 style={{textAlign:"center", margin:"50px", padding:"50px", backgroundColor:"#495e57", color:"white"}}> You have booked successfully</h1>
    <Footer></Footer>
    </div>
}

export default ConfirmedBooking;