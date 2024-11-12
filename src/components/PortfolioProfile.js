import React from "react";
import {Card} from "reactstrap";
import profile_pic from "./img/sajjad.jpg";
import {MdGroups3, MdOutlineEmail} from "react-icons/md";
import {IoCallOutline} from "react-icons/io5";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

export default function PortfolioProfile() {
    return (<div>
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
                            <h6>Java Developer (Spring Boot | React)</h6>
                        </div>
                        {/*<div align="center"><MdGroups3/> profile view <span>0</span></div>*/}
                        <div align="center">
                            <a href="https://visitcount.itsvg.in">
                                <img src="https://visitcount.itsvg.in/api?id=sajjadhossain0&icon=0&color=0"
                                     alt="Profile views counter"/>
                            </a>
                        </div>

                        <hr></hr>
                        <div align="left" className="profile-contact">
                            <div style={{fontSize: 25}}>
                                <MdOutlineEmail/><span>    </span>
                                <span style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                >sajjad.tech.eng@gmail.com</span>
                            </div>
                            <div style={{fontSize: 25}}>
                                <IoCallOutline/><span>    </span>
                                <span style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                >+880 1738082631</span>
                            </div>
                            <div style={{fontSize: 25}}>
                                <FaLinkedin/><span>    </span>
                                <a style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                   href="https:\\www.linkedin.com/in/sajjadhossain00" rel="noreferrer" target="_blank"
                                >sajjadhossain00</a>
                            </div>
                            <div style={{fontSize: 25}}>
                                <FaGithub/><span>    </span>
                                <a style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                   href="https:\\www.github.com/sajjadhossain0" rel="noreferrer" target="_blank"
                                >sajjadhossain0</a>
                            </div>
                            <div style={{fontSize: 25}}>
                                <FaFacebook/><span>    </span>
                                <a style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                   href="https:\\www.facebook.com/sajjad.hossain.8082" rel="noreferrer" target="_blank"
                                >sajjad.hossain.8082</a>
                            </div>
                            <div style={{fontSize: 25}}>
                                <FaInstagram/><span>    </span>
                                <a style={{textDecoration: "none", fontSize: 20, color: "black"}}
                                   href="https:\\www.instagram.com/s.a.j.j.a.d.h.o.s.s.a.i.n"
                                   rel="noreferrer" target="_blank"
                                >s.a.j.j.a.d.h.o.s.s.a.i.n</a>
                            </div>

                        </div>

                    </div>
                </div>
            </Card>
    </div>)
}