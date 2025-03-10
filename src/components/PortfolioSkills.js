import React from "react";
import {FaJava, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3, FaBootstrap} from "react-icons/fa";
import {PiFileC, PiFileCpp} from "react-icons/pi";
import {
    SiIntellijidea,
    SiVisualstudiocode,
    SiPostman,
    SiSpringsecurity,
    SiApachemaven, SiSpring, SiJetbrains, SiMysql, SiDocker
} from "react-icons/si";
import "./PortfolioSkills.css";
import {BiLogoSpringBoot} from "react-icons/bi";
import { DiRedis } from "react-icons/di";

export default function PortfolioSkills() {
    return (
        <div className="skills-container">
            <h2 align="center">Skills</h2>

            <div className="skill-container">

                <div className="skill">
                    {/* Languages Section */}
                    <div className="skill-section">
                        <strong className="skill-title">Languages</strong>
                        <div className="skill-item">
                            <FaJava className="skill-icon"/>
                            <span>Java</span>
                        </div>
                        <div className="skill-item">
                            <PiFileCpp className="skill-icon"/>
                            <span>C++</span>
                        </div>
                        <div className="skill-item">
                            <PiFileC className="skill-icon"/>
                            <span>C</span>
                        </div>
                        <div className="skill-item">
                            <FaJsSquare className="skill-icon"/>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>

                <div className="skill">
                    {/* Backend Section */}
                    <div className="skill-section">
                        <strong className="skill-title">Backend</strong>
                        <div className="skill-item">
                            <BiLogoSpringBoot className="skill-icon"/>
                            <span>Spring Boot</span>
                        </div>
                        <div className="skill-item">
                            <FaJava className="skill-icon"/>
                            <span>REST APIs</span>
                        </div>
                        <div className="skill-item">
                            <FaJava className="skill-icon"/>
                            <span>Spring MVC</span>
                        </div>
                        <div className="skill-item">
                            <SiSpringsecurity className="skill-icon"/>
                            <span>Spring Security</span>
                        </div>
                        <div className="skill-item">
                            <SiApachemaven className="skill-icon"/>
                            <span>Maven</span>
                        </div>
                    </div>
                </div>

                <div className="skill">
                    {/* Databse Section */}
                    <div className="skill-section">
                        <strong className="skill-title">Database</strong>
                        <div className="skill-item">
                            <SiMysql className="skill-icon"/>
                            <span>MySQL</span>
                        </div>
                        {/*<div className="skill-item">*/}
                        {/*    <DiRedis  className="skill-icon"/>*/}
                        {/*    <span>Redis</span>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="skill">
                    {/* Frontend Section */}
                    <div className="skill-section">
                    <strong className="skill-title">Frontend</strong>
                        <div className="skill-item">
                            <FaReact className="skill-icon"/>
                            <span>React</span>
                        </div>
                        <div className="skill-item">
                            <FaHtml5 className="skill-icon"/>
                            <span>HTML</span>
                        </div>
                        <div className="skill-item">
                            <FaCss3 className="skill-icon"/>
                            <span>CSS</span>
                        </div>
                        <div className="skill-item">
                            <FaBootstrap className="skill-icon"/>
                            <span>Bootstrap</span>
                        </div>
                        <div className="skill-item">
                            <SiSpring className="skill-icon"/>
                            <span>Thymeleaf</span>
                        </div>
                    </div>
                </div>

                <div className="skill">
                    {/* Version Control Section */}
                    <div className="skill-section">
                        <strong className="skill-title">Tools</strong>
                        <div className="skill-item">
                            <FaGitAlt className="skill-icon"/>
                            <span>Git</span>
                        </div>
                        <div className="skill-item">
                            <FaGithub className="skill-icon"/>
                            <span>GitHub</span>
                        </div>
                        <div className="skill-item">
                            <SiPostman className="skill-icon"/>
                            <span>Postman</span>
                        </div>
                        <div className="skill-item">
                            <SiDocker className="skill-icon"/>
                            <span>Docker</span>
                        </div>
                    </div>
                </div>

                <div className="skill">
                    {/* Dev Tools Section */}
                    <div className="skill-section">
                    <strong className="skill-title">Tools</strong>
                        <div className="skill-item">
                            <SiIntellijidea className="skill-icon"/>
                            <span>IntelliJ IDEA</span>
                        </div>
                        <div className="skill-item">
                            <SiVisualstudiocode className="skill-icon"/>
                            <span>Visual Studio Code</span>
                        </div>
                        <div className="skill-item">
                            <SiJetbrains className="skill-icon"/>
                            <span>Webstrom</span>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}
