import Main from "./Main";
import './App.css';
import BookingForm from "./BookingForm";
import { Routes, Route, Link } from "react-router-dom";
import React, {useState, useReducer, useEffect} from "react";
import {fetchAPI,submitAPI} from "./mockAPI";
import ConfirmedBooking from "./ConfirmedBooking"
import { useNavigate } from "react-router-dom";





function App() {
  var initData = initializeTimes();
  const updateTimes  = (state, action) => {
    var d = new Date(action);
    // console.log(fetchAPI(d));
    return fetchAPI(d);
}
function initializeTimes(){
    return fetchAPI(new Date());
}
  var [availableTimes, dispatch] = useReducer(updateTimes, initData);
//   console.log(availableTimes)
  const navigate = useNavigate();
  function submitForm(formData){
    if(submitAPI(formData)){
        navigate("/submitSucceed");
    }
  }
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item"></Link>
      <Link to="/BookingForm" className="nav-item"></Link>
      <Link to="/submitSucceed" className="nav-item"></Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Main />}></Route>
        <Route path="BookingForm" element={<BookingForm availableTimes={availableTimes} dispatch = {dispatch} submits = {submitForm}/>}></Route>
        <Route path="submitSucceed" element={<ConfirmedBooking/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
