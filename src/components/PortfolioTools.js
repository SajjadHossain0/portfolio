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
                            imgLink="https://private-user-images.githubusercontent.com/102672264/402483040-0ecd6f93-0f58-489f-b041-491c444f3409.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzcwNTY2MjksIm5iZiI6MTczNzA1NjMyOSwicGF0aCI6Ii8xMDI2NzIyNjQvNDAyNDgzMDQwLTBlY2Q2ZjkzLTBmNTgtNDg5Zi1iMDQxLTQ5MWM0NDRmMzQwOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExNlQxOTM4NDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NmZlNzNmZWFiMTY1NjkxYjM1ZjgxYmUzMDFlYzFhYTVmMjM3MzMwZDM0YjEzNWEwYjljMmNkMDA4ZjYzODI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.FttFQmy9QIe9NcFPHZ6D_cxGL9McsdAohwKiLBI8LEc"
                            title="Bookshelf Web Application"
                            description="A simple bookshelf web application that allows users to add, view, and manage a collection of books with cover images, titles, and author details. The app uses local storage to save the added books, ensuring the data persists across browser sessions."
                            link="https://sajjadhossain0.github.io/Book-Collection/"
                            linkText="Try it now"/>
                        <ProjectCard
                            imgLink="https://private-user-images.githubusercontent.com/102672264/385620031-8d8e296f-f36e-4e05-ba91-307410482ee4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzcwNTY3NDIsIm5iZiI6MTczNzA1NjQ0MiwicGF0aCI6Ii8xMDI2NzIyNjQvMzg1NjIwMDMxLThkOGUyOTZmLWYzNmUtNGUwNS1iYTkxLTMwNzQxMDQ4MmVlNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExNlQxOTQwNDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMmExNDk0MTQ0M2QzNzEzMGZjZWQ2MTkyNDg3MGM0OGNiNWJkMWYzN2FiNzc5YTRjMTkwZWNmNTUzNWI0OWZkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.bajFKiu9x36Gdwj2DOLzEf8cd3pehO4iEIyNfofKrso"
                            title="QR Code Generator"
                            description="A user-friendly, web-based QR code generator that allows users to create custom QR codes instantly by simply entering the desired data. This application is ideal for generating QR codes for URLs, text, contact information, or any other type of information."
                            link="https://sajjadhossain0.github.io/qr-generator/"
                            linkText="Try it now"/>

                    </div>
                </div>
            </div>
        </div>

    );
}