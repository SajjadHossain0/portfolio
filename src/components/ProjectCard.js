import React from "react";
import './ProjectCard.css'

function ProjectCard(props) {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div>
            <a style={{textDecoration: "none", color: "black"}}>
                <div className="product-card">
                    <div>
                        <img
                            src={props.imgLink}
                            alt={props.title}
                        />
                        <h3>{props.title}</h3>
                        <p>{truncateText(props.description, 50)}</p>
                        <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-link">View
                            Project</a>
                    </div>


                </div>
            </a>
        </div>
    );
}

export default ProjectCard;