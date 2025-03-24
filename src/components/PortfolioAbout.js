import React from "react";
import {Button} from "reactstrap";

export default function PortfolioAbout({cvLink}) {
    return (
        <div id="about" className="container about-container">
            <div className="row align-items-center">

                <div className="about-text">
                    <h2 align="center">About Me</h2>

                    <p>
                        Hi, I'm <strong>Md. Sajjad Hossain</strong>, a passionate <strong>Java Developer</strong> with
                        hands-on experience in building <strong>scalable backend systems</strong>, <strong>RESTful
                        APIs</strong>, and <strong>full-stack web applications</strong>. My expertise lies in <strong>Java,
                        Spring Boot, and MySQL</strong>, along with frontend technologies
                        like <strong>React</strong>.
                    </p>
                    <p>
                        I have a strong understanding of <strong>authentication systems (JWT &
                        OAuth2)</strong>, and <strong>containerization with
                        Docker</strong>, allowing me to develop and deploy <strong>secure, efficient, and high-performance
                        applications</strong>. I am also dedicated to <strong>problem-solving</strong> and <strong>system
                        design</strong>, continuously refining my skills to create optimized solutions.
                    </p>
                    <p>
                        My goal is to develop <strong>maintainable</strong> and <strong>user-friendly
                        applications</strong> while staying updated with the latest <strong>industry trends</strong>. I
                        am always eager to take on new challenges and collaborate with teams to build <strong>innovative
                        software solutions</strong>.
                    </p>

                    {/* Button to CV */}
                    <div align="right">
                        <Button
                            color="primary"
                            href={cvLink}
                            target="_blank">
                            Download My CV
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}