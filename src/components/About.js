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
                        src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/449311238_2064280463968254_6880502970315492370_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH51UVczVAl7284WoyGRQm5f6eGQ3z79t5_p4ZDfPv23ifIJ5D2BqjsWSFkxa6_7ZImTr0_WHq-89uKONyNnU5x&_nc_ohc=mpVnqkStxx4Q7kNvgEcAAQU&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=ACOhjwp7AVS5CA8v7GRvz7l&oh=00_AYAZT_l5nB8r6Bj7piHGPA6w5ws4B1bRl8RRSZCxd555lg&oe=671E92F0"
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
                        href="https://drive.google.com/file/d/11xScXHwswx2zYsezlvRXDMXzuwlonu6A/view?usp=drive_link"
                        target="_blank"
                    >
                        Download My CV
                    </Button>
                </div>
            </div>
        </div>
    );
}
