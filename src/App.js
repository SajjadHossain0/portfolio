import React from "react";
import './App.css';
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";


function App() {
    return (
            <div className="app-container">

                <Portfolio/>

                {/*<Header/>
                <Home/>
                <About/>
                <Skills/>
                <Project/>
                <Contact />
                <Footer/>*/}
            </div>
    );
}

export default App;

/*
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
*/
