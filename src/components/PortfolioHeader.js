import React from "react";
import './PortfolioHeader.css'

export default function PortfolioHeader(header) {
    return (
        <div className="container d-flex justify-content-between align-items-center">
            <h1 className="header-title"></h1>
            <div style={{padding:10}} className="link-container">
                <a href="/">About</a>
                <a href="/skills">Skills</a>
                <a href="/project">Projects</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    )
}