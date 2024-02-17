import './Main.css';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Header from './components/Header';
import Book from "./components/book";
import { Routes, Route, Link } from "react-router-dom";

function Main() {
  
  return (
    <div className="App">
    <Nav></Nav>
    <Header></Header>
    <Articles></Articles>
    <Footer></Footer>
    </div>
  );
}

export default Main;
