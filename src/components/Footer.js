import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="text-center mb-3">
                    <p className="footer-text mb-0">Created by <span className="footer-name">Md. Sajjad Hossain</span> || All Rights Reserved</p>
                </div>
                <div className="social-icons d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/md-sajjad-hossain-b28154234" rel="noreferrer" target="_blank" className="footer-icon mx-2">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.github.com/sajjadhossain0" rel="noreferrer" target="_blank" className="footer-icon mx-2">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/s.a.j.j.a.d.h.o.s.s.a.i.n" rel="noreferrer" target="_blank" className="footer-icon mx-2">
                        <RiInstagramFill />
                    </a>
                    <a href="https://www.facebook.com/sajjad.hossain.8082" rel="noreferrer" target="_blank" className="footer-icon mx-2">
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </footer>
    );
}
