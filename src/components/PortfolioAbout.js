import React from "react";
import {Button} from "reactstrap";
import './PortfolioAbout.css'
import {FaBuilding} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";

export default function PortfolioAbout({cvLink}) {

    const educationData = [
        {
            title: "B.Sc. in Computer Science & Engineering",
            institution: "Dhaka International University",
            location: "Dhaka, Bangladesh",
            duration: "2022 – 2026"
        } ,
        {
            title: "Higher Secondary Certificate (HSC) in Science",
            institution: "Dania University College",
            location: "Dhaka, Bangladesh",
            duration: "2019 – 2021"
        } ,

    ];

const workExperienceData = [
        {
            title: "Java Developer",
            status: "Internship",
            company: "Itransition",
            location: "Remote",
            duration: "July 2024 - september 2024"
        },

    ];

    return (
        <div id="about" className="container about-container">
            <div className="row align-items-center">

                <div className="about-text">
                    <div className="about-heading">
                        <h2 align="center">About Me</h2>
                        {/* Button to CV */}
                        <div align="right">
                            <Button
                                className="cv-download-btn"
                                href={cvLink}
                                target="_blank"
                            >
                                Download My CV
                            </Button>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="about-summary">
                        <p>
                        Hi, I'm <strong>Md. Sajjad Hossain</strong>, a passionate <strong>Java
                            Developer</strong> with
                            hands-on experience in building <strong>scalable backend systems</strong>, <strong>RESTful
                            APIs</strong>, and <strong>full-stack web applications</strong>. My expertise lies
                            in <strong>Java,
                            Spring Boot, and MySQL</strong>, along with frontend technologies
                            like <strong>React</strong>.
                        </p>
                        <p>
                            I have a strong understanding of <strong>authentication systems (JWT &
                            OAuth2)</strong>, and <strong>containerization with
                            Docker</strong>, allowing me to develop and deploy <strong>secure, efficient, and
                            high-performance
                            applications</strong>. I am also dedicated to <strong>problem-solving</strong> and <strong>system
                            design</strong>, continuously refining my skills to create optimized solutions.
                        </p>
                        <p>
                            My goal is to develop <strong>maintainable</strong> and <strong>user-friendly
                            applications</strong> while staying updated with the latest <strong>industry trends</strong>.
                            I
                            am always eager to take on new challenges and collaborate with teams to build <strong>innovative
                            software solutions</strong>.
                        </p>
                    </div>

                    <div className="education">
                        <h3>Education</h3>
                        {educationData.map((edu, index) => (
                            <div key={index}>
                                <div className="education-pos-status">
                                    <strong>{edu.title}</strong>
                                </div>

                                <div className="education-info-date">
                                    <div className="education-info">
                                        <p><FaBuilding/> {edu.institution}</p>
                                        <p><FaLocationDot/> {edu.location}</p>
                                    </div>
                                    <p>{edu.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="work-experience">
                        <h3>Work Experience</h3>
                        {workExperienceData.map((work) => (
                            <>
                                <div className="work-experience-pos-status">
                                    <strong>{work.title}</strong>
                                    <p className="status-active">{work.status}</p>
                                </div>
                                <div className="work-experience-info-date">
                                    <div className="work-experience-info">
                                    <p><FaBuilding/> {work.company}</p>
                                        <p><FaLocationDot/> {work.location}</p>
                                    </div>
                                    <p className="">{work.duration}</p>
                                </div>
                            </>
                        ))}
                    </div>

                </div>
            </div>
        </div>

    )
}