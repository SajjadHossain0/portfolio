import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";

export default function PortfolioContact() {
    return (
        <div id="contact" className="container contact-container">
            <div className="row">

                <div className="col-md-6 contact-img">
                    <img
                        src="https://www.shutterstock.com/image-vector/smiling-young-man-headphones-microphone-600nw-2213661961.jpg"
                    alt="contact"/>
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

                <div className="py-4">
                    <div className="container">
                        <div className="text-center mb-3">
                            <p className="footer-text mb-0">Or contact me through my social media</p>
                        </div>
                        <div className="social-icons d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/md-sajjad-hossain-b28154234" rel="noreferrer"
                               target="_blank" className="footer-icon mx-2">
                                <FaLinkedin/>
                            </a>
                            <a href="https://www.github.com/sajjadhossain0" rel="noreferrer" target="_blank"
                               className="footer-icon mx-2">
                                <FaGithub/>
                            </a>
                            <a href="https://www.instagram.com/s.a.j.j.a.d.h.o.s.s.a.i.n" rel="noreferrer"
                               target="_blank" className="footer-icon mx-2">
                                <RiInstagramFill/>
                            </a>
                            <a href="https://www.facebook.com/sajjad.hossain.8082" rel="noreferrer" target="_blank"
                               className="footer-icon mx-2">
                                <FaFacebook/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}