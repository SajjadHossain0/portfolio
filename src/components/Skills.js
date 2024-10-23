import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';

export default function Skills() {

    const skills = [
        { name: "Java", level: "90%" },
        { name: "Spring Boot", level: "85%" },
        { name: "Thymeleaf", level: "80%" },
        { name: "HTML/CSS", level: "85%" },
        { name: "JavaScript", level: "75%" },
        { name: "React.js", level: "60%" },
        { name: "Git", level: "80%" },
        { name: "MySQL", level: "85%" },
    ];

    return (
        <div id="skills" className="container skills-container">
            <h2 className="text-center mb-4">My Skills</h2>
            <div className="row align-items-center">

                {/* Skills Progress Bars */}
                <div className="col-md-6 skills-text">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill mb-4">
                            <h5>{skill.name}</h5>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: skill.level }}>
                                    {skill.level}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Section */}
                <div className="col-md-6 skills-image text-center">
                    <img
                        src="https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133939.jpg?t=st=1729619124~exp=1729622724~hmac=19322814b56d5025acbc41c8320b7d771413a03868294161afaedf6453ccfbd1&w=740"
                        alt="Skills Representation"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}
