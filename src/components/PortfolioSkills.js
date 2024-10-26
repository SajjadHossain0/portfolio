import React from "react";
import { FaJava, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { PiFileCpp } from "react-icons/pi";
import { SiIntellijidea, SiSpringboot, SiVisualstudiocode, SiPostman } from "react-icons/si";
import "./PortfolioSkills.css";

export default function PortfolioSkills() {
    return (
        <div className="skills-container">
            <h2 align="center">Skills</h2>

            {/* Languages Section */}
            <div className="skill-section">
                <strong className="skill-title">Languages</strong>
                <div className="skill-item">
                    <FaJava className="skill-icon" />
                    <span>Java</span>
                </div>
                <div className="skill-item">
                    <PiFileCpp className="skill-icon" />
                    <span>C++</span>
                </div>
                <div className="skill-item">
                    <FaJsSquare className="skill-icon" />
                    <span>JavaScript</span>
                </div>
            </div>

            {/* Backend Section */}
            <div className="skill-section">
                <strong className="skill-title">Backend</strong>
                <div className="skill-item">
                    <SiSpringboot className="skill-icon" />
                    <span>Spring Boot</span>
                </div>
                <div className="skill-item">
                    <FaJava className="skill-icon" />
                    <span>REST APIs</span>
                </div>
                <div className="skill-item">
                    <FaJava className="skill-icon" />
                    <span>Spring MVC</span>
                </div>
                <div className="skill-item">
                    <FaJava className="skill-icon" />
                    <span>Spring Security</span>
                </div>
                <div className="skill-item">
                    <FaJava className="skill-icon" />
                    <span>Maven</span>
                </div>
            </div>

            {/* Frontend Section */}
            <div className="skill-section">
                <strong className="skill-title">Frontend</strong>
                <div className="skill-item">
                    <FaReact className="skill-icon" />
                    <span>React</span>
                </div>
                <div className="skill-item">
                    <FaHtml5 className="skill-icon" />
                    <span>HTML</span>
                </div>
                <div className="skill-item">
                    <FaCss3 className="skill-icon" />
                    <span>CSS</span>
                </div>
                <div className="skill-item">
                    <FaBootstrap className="skill-icon" />
                    <span>Bootstrap</span>
                </div>
                <div className="skill-item">
                    <FaJsSquare className="skill-icon" />
                    <span>Thymeleaf</span>
                </div>
            </div>

            {/* Version Control Section */}
            <div className="skill-section">
                <strong className="skill-title">Version Control</strong>
                <div className="skill-item">
                    <FaGitAlt className="skill-icon" />
                    <span>Git</span>
                </div>
                <div className="skill-item">
                    <FaGithub className="skill-icon" />
                    <span>GitHub</span>
                </div>
            </div>

            {/* Dev Tools Section */}
            <div className="skill-section">
                <strong className="skill-title">Dev Tools</strong>
                <div className="skill-item">
                    <SiIntellijidea className="skill-icon" />
                    <span>IntelliJ IDEA</span>
                </div>
                <div className="skill-item">
                    <SiVisualstudiocode className="skill-icon" />
                    <span>Visual Studio Code</span>
                </div>
                <div className="skill-item">
                    <SiPostman className="skill-icon" />
                    <span>Postman</span>
                </div>
            </div>
        </div>
    );
}
