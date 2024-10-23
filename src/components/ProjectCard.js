import React from "react";
import './ProjectCard.css'

function ProjectCard({title,description,link,imgLink}) {
    return (
        <div>
            <div className="project-card">
                <img src={imgLink} alt={title} className="project-image"/>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View
                    Project</a>
            </div>
        </div>
    );
}

export default ProjectCard;