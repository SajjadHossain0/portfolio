import React from "react";
import {Card} from "reactstrap";
import profile_pic from "./img/sajjad.jpg";
import {MdOutlineEmail} from "react-icons/md";
import {IoCallOutline} from "react-icons/io5";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

export default function PortfolioProfile() {
    return (
        <div>
            <Card>
                <div style={{padding: 5}} className="profile">
                    <div align="center" className="container">
                        <img
                            style={{margin: 5}}
                            className="rounded-circle img-fluid profile-img"
                            alt="Profile"
                            src={profile_pic}   // Ensure square dimensions for source
                        />
                        <div className="profile-text">
                            <h1><strong>Md. Sajjad Hossain</strong></h1>
                            <h6>Full Stack Developer (Spring Boot | React)</h6>
                        </div>
                        <hr></hr>
                        <div align="left" className="profile-contact">
                            <div style={{fontSize: 25}}>
                                <MdOutlineEmail/><span>    </span>
                                <a style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                >sajjad.tech.eng@gmail.com</a>
                            </div>
                            <div style={{fontSize: 25}}>
                                <IoCallOutline/><span>    </span>
                                <a style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                >+880 1738082631</a>
                            </div>
                            <div style={{fontSize: 25}}>
                                <FaLinkedin/><span>    </span>
                                <a style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                   href="https:\\www.linkedin.com/in/sajjadhossain00" target="_blank"
                                >sajjadhossain00</a>
                            </div>
                            <div style={{fontSize: 25}}>
                                <FaGithub/><span>    </span>
                                <a style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                   href="https:\\www.github.com/sajjadhossain0" target="_blank"
                                >sajjadhossain0</a>
                            </div>
                            <div style={{fontSize: 25}}>
                                <FaFacebook/><span>    </span>
                                <a style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                   href="https:\\www.facebook.com/sajjad.hossain.8082" target="_blank"
                                >sajjad.hossain.8082</a>
                            </div>
                            <div style={{fontSize: 25}}>
                                <FaInstagram/><span>    </span>
                                <a style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                   href="https:\\www.instagram.com/s.a.j.j.a.d.h.o.s.s.a.i.n"
                                   target="_blank"
                                >s.a.j.j.a.d.h.o.s.s.a.i.n</a>
                            </div>

                        </div>

                    </div>
                </div>
            </Card>
        </div>
    )
}