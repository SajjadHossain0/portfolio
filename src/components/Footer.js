import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import {FaFacebook} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer" style={{marginBottom:20,marginTop:20}}>
            <div align="center">Created by Sajjad Hossain || All Rights Reserved</div>

            <div align="center" className="footer-icons">
                    <a href="https://www.linkedin.com/in/md-sajjad-hossain-b28154234"
                       target="_blank"><FaLinkedin/></a>

                    <a href="https://www.github.com/sajjadhossain0"
                       target="_blank"><FaGithub/></a>

                    <a href="https://www.instagram.com/s.a.j.j.a.d.h.o.s.s.a.i.n"
                       target="_blank"><RiInstagramFill/></a>

                    <a href="https://www.facebook.com/sajjad.hossain.8082"
                       target="_blank"><FaFacebook/></a>
            </div>
        </footer>
    )
}