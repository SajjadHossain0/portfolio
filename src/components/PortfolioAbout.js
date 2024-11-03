import React from "react";
import {Button} from "reactstrap";

export default function PortfolioAbout({cvLink}) {
    return (
        <div id="about" className="container about-container">
            <div className="row align-items-center">

                <div className="about-text">
                    <h2 align="center">About Me</h2>
                    <p>
                        Hi, I'm <strong>Md. Sajjad Hossain</strong>, a passionate Java Developer with a strong foundation in
                        websites, web-applications and REST API's development using <strong>SpringBoot + MySQL + React</strong>. I have experience working on multiple web apps and websites, and I am proficient in
                        Java, Spring Boot, and frontend technologies like React and Thymeleaf.
                    </p>
                    <p>
                        My goal is to build efficient, scalable applications that provide excellent user experiences.
                    </p>

                    {/* Button to CV */}
                    <div align="right">
                        <Button
                            color="primary"
                            href={cvLink}
                            target="_blank">
                            Download My CV
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}