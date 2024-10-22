import React from "react";
import './ProjectCard.css'

import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";

function ProjectCard({title,description,link,imgLink}) {
    return (
        <div>
            <Card className="slider-card">
                <img alt="Card" src={imgLink} height="200" width="300"/>
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardText><p>{description}</p></CardText>
                </CardBody>
                <CardBody>
                    <Button href={link} target="_blank">
                        view
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default ProjectCard;