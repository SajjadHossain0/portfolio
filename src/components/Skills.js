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
                        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmFuaGh1NWdmbGlycTUybHI4dm04d3BhbmxjeHF2dmJnYWZyMHFteCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
                        alt="Skills Representation"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}
