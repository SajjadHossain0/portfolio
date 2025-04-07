import React from "react";
import {
    FaJava, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaHtml5,
    FaCss3, FaBootstrap
} from "react-icons/fa";
import { PiFileC, PiFileCpp } from "react-icons/pi";
import {
    SiIntellijidea, SiVisualstudiocode, SiPostman, SiSpringsecurity,
    SiApachemaven, SiSpring, SiJetbrains, SiMysql, SiDocker, SiGithubactions
} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import "./PortfolioSkills.css";

const skillsData = [
    {
        title: "Languages",
        skills: [
            { icon: <FaJava />, label: "Java" },
            { icon: <PiFileCpp />, label: "C++" },
            { icon: <PiFileC />, label: "C" },
            { icon: <FaJsSquare />, label: "JavaScript" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { icon: <BiLogoSpringBoot />, label: "Spring Boot" },
            { icon: <FaJava />, label: "REST APIs" },
            { icon: <FaJava />, label: "Spring MVC" },
            { icon: <SiSpringsecurity />, label: "Spring Security" },
            { icon: <SiApachemaven />, label: "Maven" },
        ],
    },
    {
        title: "Database",
        skills: [
            { icon: <SiMysql />, label: "MySQL" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { icon: <FaReact />, label: "React" },
            { icon: <FaHtml5 />, label: "HTML" },
            { icon: <FaCss3 />, label: "CSS" },
            { icon: <FaBootstrap />, label: "Bootstrap" },
            { icon: <SiSpring />, label: "Thymeleaf" },
        ],
    },
    {
        title: "DevOps",
        skills: [
            { icon: <SiGithubactions />, label: "GitHub Actions" },
            { icon: <SiDocker />, label: "Docker" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { icon: <FaGitAlt />, label: "Git" },
            { icon: <FaGithub />, label: "GitHub" },
            { icon: <SiPostman />, label: "Postman" },
        ],
    },
    {
        title: "Platform",
        skills: [
            { icon: <SiIntellijidea />, label: "IntelliJ IDEA" },
            { icon: <SiVisualstudiocode />, label: "Visual Studio Code" },
            { icon: <SiJetbrains />, label: "Webstorm" },
        ],
    },
];

export default function PortfolioSkills() {
    return (
        <div className="skills-container">
            <h2 align="center">Skills</h2>
            <div className="skill-container">
                {skillsData.map((section, index) => (
                    <div className="skill" key={index}>
                        <div className="skill-section">
                            <strong className="skill-title">{section.title}</strong>
                            {section.skills.map((item, i) => (
                                <div className="skill-item" key={i}>
                                    <span className="skill-icon">{item.icon}</span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
