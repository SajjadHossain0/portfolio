import React, {useState} from "react";
import './PortfolioHeader.css'

export default function PortfolioHeader({setActiveComponent}) {


    return (
        <div className="container  justify-content-between align-items-center">
            <h1 className="header-title"></h1>
            <div align="center" style={{padding: 10}} className="link-container">
                <a onClick={() => setActiveComponent("About")}>About</a>
                <a onClick={() => setActiveComponent("Skills")}>Skills</a>
                <a onClick={() => setActiveComponent("Project")}>Projects</a>
                <a onClick={() => setActiveComponent("Tools")}>Tools</a>
                <a onClick={() => setActiveComponent("Contact")}>Contact</a>
            </div>
        </div>
    )
}