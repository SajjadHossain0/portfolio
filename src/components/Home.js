import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import profile_pic from './img/sajjad.jpg'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import {FaFacebook} from "react-icons/fa";

export default function Home() {
    return (
        <div id="home" className="container home-container">
            <div className="row">

                <div className="col-md-1 d-flex flex-column home-icons">
                    <div className="p-2">
                        <a href="https://www.linkedin.com/in/md-sajjad-hossain-b28154234"
                           rel="noreferrer" target="_blank"><FaLinkedin/></a>
                    </div>
                    <div className="p-2">
                        <a href="https://www.github.com/sajjadhossain0"
                           rel="noreferrer" target="_blank"><FaGithub/></a>
                    </div>
                    <div className="p-2">
                        <a href="https://www.instagram.com/s.a.j.j.a.d.h.o.s.s.a.i.n"
                           rel="noreferrer" target="_blank"><RiInstagramFill/></a>
                    </div>
                    <div className="p-2">
                        <a href="https://www.facebook.com/sajjad.hossain.8082"
                           rel="noreferrer" target="_blank"><FaFacebook/></a>
                    </div>
                </div>

                <div className="col-md-6 home-text">
                    <h1>Hi, I'm Md. Sajjad Hossain</h1>
                    <h5>A Java Spring boot developer</h5>
                    <p>I'm a passionate Java Spring Boot developer and Computer Science student with a strong foundation
                        in web development, database management, and software engineering. I specialize in building
                        robust and scalable web applications, and I'm on a journey to become a full-stack developer by
                        mastering technologies like React.js.</p>
                    <p>Explore my projects, skills, and experiences below, and feel free to get in touch for
                        collaboration or job opportunities!</p>

                    <a href="#about" className="btn">Learn More About Me</a>
                    <a href="https://drive.google.com/file/d/1UGdKRMHHNmJatbWuU2uhR32seUn4npmO/view?usp=drive_link"
                       target="_blank" download className="btn btn-primary">Download My CV</a>

                </div>

                <div className="col-md-5 home-image">
                    <img
                        src={profile_pic} alt="sajjad"/>
                </div>
            </div>

        </div>
    );
}