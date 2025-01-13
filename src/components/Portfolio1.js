import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";


export default function Portfolio1() {
    return (
        <div className="app-container">

            <Header/>
                <Home/>
                <About/>
                <Skills/>
                <Project/>
                <Contact />
                <Footer/>
        </div>
    );
}
