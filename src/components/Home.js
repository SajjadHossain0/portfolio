import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import {Button} from "reactstrap";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import {FaFacebook} from "react-icons/fa";

function Home() {
    return (
        <div className="container home-container">
            <div className="row">

                <div className="col-md-1 d-flex flex-column home-icons">
                    <div className="p-2">
                        <a href="https://www.linkedin.com/in/md-sajjad-hossain-b28154234"
                           target="_blank"><FaLinkedin/></a>
                    </div>
                    <div className="p-2">
                        <a href="https://www.github.com/sajjadhossain0"
                           target="_blank"><FaGithub/></a>
                    </div>
                    <div className="p-2">
                        <a href="https://www.instagram.com/s.a.j.j.a.d.h.o.s.s.a.i.n"
                           target="_blank"><RiInstagramFill/></a>
                    </div>
                    <div className="p-2">
                        <a href="https://www.facebook.com/sajjad.hossain.8082"
                           target="_blank"><FaFacebook/></a>
                    </div>
                </div>

                <div className="col-md-6 home-text">
                    <h1>Hello, I'm</h1>
                    <h1>Md. Sajjad Hossain</h1>
                    <h5>A Java Spring boot developer</h5>
                    <p>Aspiring Java Developer with a strong foundation in Spring Boot and web application
                        development.
                        Seeking an
                        opportunity to apply my programming skills and contribute to innovative projects.</p>
                    <Button>Contact Me</Button>
                </div>

                <div className="col-md-5 home-image">
                    <img
                        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmFuaGh1NWdmbGlycTUybHI4dm04d3BhbmxjeHF2dmJnYWZyMHFteCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"/>
                </div>
            </div>

        </div>
    );
}

export default Home;