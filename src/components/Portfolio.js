import React, {useState} from "react";
import {Card} from "reactstrap";
import './Portfolio.css'
import {MdOutlineEmail} from "react-icons/md";
import {IoCallOutline} from "react-icons/io5";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import profile_pic from './img/sajjad.jpg'
import PortfolioAbout from "./PortfolioAbout";
import PortfolioHeader from "./PortfolioHeader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PortfolioSkills from "./PortfolioSkills";
import PortfolioProject from "./PortfolioProject";
import PortfolioContact from "./PortfolioContact";
import PortfolioHome from "./PortfolioHome";
import PortfolioProfile from "./PortfolioProfile";

export default function Portfolio() {
    const [activeComponent, setActiveComponent] = useState("About");
    const renderContent = () => {
        switch (activeComponent) {
            case "About":
                return <PortfolioAbout />;
            case "Skills":
                return <PortfolioSkills />;
            case "Project":
                return <PortfolioProject />;
            case "Contact":
                return <PortfolioContact />;
            default:
                return <PortfolioAbout />;
        }
    };


    return (
        //<BrowserRouter>
            <div id="home" className="container home-container">
                <div className="row">

                    <div style={{marginBottom: 5}} className="col-md-4">
                        <PortfolioProfile/>
                    </div>

                    <div className="col-md-8">
                        <Card>
                            {/*
                            <div className="main">
                                <PortfolioHeader/>
                                <Routes>
                                    <Route path="/" element={<PortfolioAbout/>} />
                                </Routes>
                                <Routes>
                                    <Route path="/skills" element={<PortfolioSkills/>} />
                                </Routes>
                                <Routes>
                                    <Route path="/project" element={<PortfolioProject/>} />
                                </Routes>
                                <Routes>
                                    <Route path="/contact" element={<PortfolioContact/>} />
                                </Routes>

                            </div>
*/}
                            <div className="main">
                                <PortfolioHeader setActiveComponent={setActiveComponent}/>
                                {renderContent()}
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        //</BrowserRouter>
    )
}