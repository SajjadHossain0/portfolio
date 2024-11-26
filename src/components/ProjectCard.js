import React from "react";
import './ProjectCard.css'

function ProjectCard({title,description,link,imgLink}) {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div>
            <div className="project-card">
                <img src={imgLink} alt={title} className="project-image"/>
                <h3>{title}</h3>
                <p>{truncateText(description,50)}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View
                    Project</a>
            </div>
        </div>
    );
}

export default ProjectCard;