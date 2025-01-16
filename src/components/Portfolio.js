import React, {useState} from "react";
import {Card} from "reactstrap";
import './Portfolio.css'
import PortfolioAbout from "./PortfolioAbout";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSkills from "./PortfolioSkills";
import PortfolioProject from "./PortfolioProject";
import PortfolioContact from "./PortfolioContact";
import PortfolioProfile from "./PortfolioProfile";
import PortfolioTools from "./PortfolioTools";

export default function Portfolio() {
    const [activeComponent, setActiveComponent] = useState("About");
    const renderContent = () => {
        switch (activeComponent) {
            case "About":
                return <PortfolioAbout cvLink="https://drive.google.com/file/d/12zwOncna4-dqWeUSDsvFfJ9SRqhYxfUO/view?usp=drive_link" />;
            case "Skills":
                return <PortfolioSkills />;
            case "Project":
                return <PortfolioProject />;
            case "Tools":
                return <PortfolioTools/>;
            case "Contact":
                return <PortfolioContact />;
            default:
                return <PortfolioAbout />;
        }
    };


    return (
            <div id="home" className="container home-container">
                <div className="row">

                    <div style={{marginBottom: 5}} className="col-md-4">
                        <PortfolioProfile/>
                    </div>

                    <div className="col-md-8">
                        <Card>
                            <div className="main">
                                <PortfolioHeader setActiveComponent={setActiveComponent}/>
                                {renderContent()}
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
    )
}