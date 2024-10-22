import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Project from "./components/Project";
import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Home/>
            <About/>
            <Skills/>
            <Project/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;
