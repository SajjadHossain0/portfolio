import React from "react";

export default function PortfolioHome() {
    return (
        <div className="container" style={{padding:10}}>
            <h1>Hi, I'm Md. Sajjad Hossain</h1>
            <h5>A Java Spring boot developer</h5>
            <p>I'm a passionate Java Spring Boot developer and Computer Science student with a strong foundation
                in web development, database management, and software engineering. I specialize in building
                robust and scalable web applications, and I'm on a journey to become a full-stack developer by
                mastering technologies like React.js.</p>
            <p>Explore my projects, skills, and experiences below, and feel free to get in touch for
                collaboration or job opportunities!</p>

            <a href="/" className="btn">Learn More About Me</a>
            <a href="https://drive.google.com/file/d/1UGdKRMHHNmJatbWuU2uhR32seUn4npmO/view?usp=drive_link"
               target="_blank" download className="btn btn-primary">Download My CV</a>

        </div>

    )
}