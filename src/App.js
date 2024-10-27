import React from "react";
import './App.css';
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header/>
                <Home/>
                <About/>
                <Skills/>
                <Project/>
                <Contact />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
