import './Main.css';
import "./Booking.css";
import Nav from './components/Nav';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Header from './components/Header';
import BookingForm from './BookingForm';

import { Routes, Route, Link } from "react-router-dom";
function Main() {
  return (
    <div className="App">
    <Nav></Nav>
    <BookingForm></BookingForm>
    <Footer></Footer>
    </div>
  );
}

export default Main;
