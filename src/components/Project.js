import React, {useRef} from "react";
import './Project.css';
import ProjectCard from "./ProjectCard";
// import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";

export default function Project() {
    const cardContainerRef = useRef(null);

    const slideLeft = () => {
        cardContainerRef.current.scrollBy({
            left: -300, // Adjust the scroll distance based on card width
            behavior: "smooth",
        });
    };

    const slideRight = () => {
        cardContainerRef.current.scrollBy({
            left: 300, // Adjust the scroll distance based on card width
            behavior: "smooth",
        });
    };

    return (

        <div id="projects" className="slider-container">
            <h2 align="center">Projects</h2>
            
            {/* Left Slide Button */}
            <button className="slide-btn left" onClick={slideLeft}>‹</button>

            {/* Cards Container */}
            <div className="card-container" ref={cardContainerRef}>
                <ProjectCard
                    imgLink="data:image/jpeg;base64,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"
                    title="E-commerce"
                    description="This is an e-commerce web application for product selling using Java Spring Boot."
                    link="https://github.com/SajjadHossain0/e_commrce_webapp"/>
                <ProjectCard
                    imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzcxH_JZuqaCQ3Bam1fqN4slz24i5TKFKsA&s"
                    title="gym management system"
                    description="This is a gym management system where we can manage the info of members, search them, store them as well as we can store their payment history."
                    link="https://github.com/SajjadHossain0/gym-management-system"/>
                <ProjectCard
                    imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxh2PFqDZfigQKOzQWBGkHAF9DJfA-TMHQyw&s"
                    title="Store Collections"
                    description="A Web-application for arbitrary personal collection management (books, post-stamps, coins, etc.)."
                    link="https://github.com/SajjadHossain0/collection_web_application"/>

                <ProjectCard
                    imgLink="data:image/png;base64,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"
                    title="Music Player"
                    description="This is an music player made with java."
                    link="https://github.com/SajjadHossain0/Music_Player"/>
            </div>

            {/* Right Slide Button */}
            <button className="slide-btn right" onClick={slideRight}>›</button>
        </div>
    );
}
