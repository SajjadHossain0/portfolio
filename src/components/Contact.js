import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default function Contact() {
    return (
        <div align="center" className="Contact contact-container">
            <h2 align="center">Contact me</h2>
            <div className="container">
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
    );
}
