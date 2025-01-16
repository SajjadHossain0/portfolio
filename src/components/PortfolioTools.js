import React from 'react';
import ProjectCard from "./ProjectCard";

export default function PortfolioTools(){

    return(
        <div className="container">
            <h2 align="center">Projects</h2>
            <div className="card-container">


                <div className="product-grid-div">
                    <div className="product-grid">

                        <ProjectCard
                            imgLink="https://github.com/user-attachments/assets/0ecd6f93-0f58-489f-b041-491c444f3409"
                            title="Bookshelf Web Application"
                            description="A simple bookshelf web application that allows users to add, view, and manage a collection of books with cover images, titles, and author details. The app uses local storage to save the added books, ensuring the data persists across browser sessions."
                            link="https://sajjadhossain0.github.io/Book-Collection/"
                            linkText="Try it now"/>
                        <ProjectCard
                            imgLink="https://github.com/user-attachments/assets/8d8e296f-f36e-4e05-ba91-307410482ee4"
                            title="QR Code Generator"
                            description="A user-friendly, web-based QR code generator that allows users to create custom QR codes instantly by simply entering the desired data. This application is ideal for generating QR codes for URLs, text, contact information, or any other type of information."
                            link="https://sajjadhossain0.github.io/qr-generator/"
                            linkText="Try it now"/>
                        <ProjectCard
                            imgLink="https://github.com/user-attachments/assets/b6ba56bf-cefa-4a32-afd8-a7b272e0459e"
                            title="Age Calculator"
                            description="A professional and user-friendly web-based Age Calculator that calculates a user's precise age in years, months, and days based on their selected birthdate. This tool is ideal for quickly determining ages for various purposes, such as forms, documentation, or personal curiosity."
                            link="https://sajjadhossain0.github.io/Age-calculator/"
                            linkText="Try it now"/>

                    </div>
                </div>
            </div>
        </div>

    );
}