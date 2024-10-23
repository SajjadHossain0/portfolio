import React from "react";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

export default function About() {
    return (
        <div id="about" className="container about-container">
            <div className="row align-items-center">

                {/* About Image */}
                <div className="col-md-6 about-img">
                    <img
                        src="your-image-url.jpg"
                        alt="About Me"
                        className="img-fluid rounded"
                    />
                </div>

                {/* About Text Content */}
                <div className="col-md-6 about-text">
                    <h2>About Me</h2>
                    <p>
                        Hi, I'm Md. Sajjad Hossain, a passionate Java Spring Boot developer with a strong foundation in e-commerce
                        application development. I have experience working on multiple web apps, and I am proficient in Java, Spring Boot, and
                        frontend technologies like React and Thymeleaf.
                    </p>
                    <p>
                        My goal is to build efficient, scalable applications that provide excellent user experiences. I'm currently
                        learning React.js to enhance my full-stack development skills.
                    </p>

                    {/* Button to CV */}
                    <Button
                        color="primary"
                        href="/path-to-your-CV.pdf"
                        target="_blank"
                    >
                        Download My CV
                    </Button>
                </div>
            </div>
        </div>
    );
}
