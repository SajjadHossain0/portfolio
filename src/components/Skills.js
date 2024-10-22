import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css'

export default function Skills() {

    const skills = [
        { name: "Java", level: "90%" },
        { name: "Spring Boot", level: "85%" },
        { name: "React.js", level: "75%" },
        { name: "JavaScript", level: "70%" },
        { name: "HTML/CSS", level: "90%" },
        { name: "MySQL", level: "80%" },
    ];

    return (
        <div className="container skills-container">
            <div className="row">

                <div className="col-md-6 skills-text">
                    <div className="skills-container">
                        <h2 align="center">My Skills</h2>
                        {skills.map((skill, index) => (
                            <div key={index} className="skill">
                                <h5>{skill.name}</h5>
                                <div className="progress">
                                    <div className="progress-bar" style={{width: skill.level}}>
                                        {skill.level}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-md-6 skills-image">
                    <img
                        src="https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133939.jpg?t=st=1729619124~exp=1729622724~hmac=19322814b56d5025acbc41c8320b7d771413a03868294161afaedf6453ccfbd1&w=740"/>
                </div>
            </div>

        </div>
    )
}