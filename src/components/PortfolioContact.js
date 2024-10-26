import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default function PortfolioContact() {
    return (
        <div id="contact" className="container contact-container">
            <div className="row">

                <div className="col-md-6 contact-img">
                    <img
                        src="https://www.shutterstock.com/image-vector/smiling-young-man-headphones-microphone-600nw-2213661961.jpg"/>
                </div>

                <div className="col-md-6 contact-form">
                    <h2 align="center">Contact me</h2>

                    <Form>
                        <FormGroup>
                            <Label for="exampleName">
                                Name
                            </Label>
                            <Input
                                id="exampleName"
                                name="name"
                                placeholder="Write your name"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="email@domain.com"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Write message
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                placeholder="Write your message..."
                                type="textarea"
                            />
                        </FormGroup>
                        <Button outline>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    )
}