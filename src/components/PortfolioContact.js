import React, {useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import emailjs from '@emailjs/browser';
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function PortfolioContact() {

    const successNotify = (message) => toast.success(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const errorNotify = (message) => toast.error(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .send(
                "service_3ph4zjj", // Replace with your EmailJS Service ID
                "template_y9ra7xe", // Replace with your EmailJS Template ID
                formData,
                "zr3Qbl8mgei3xhDFe" // Replace with your EmailJS User ID
            )
            .then(() => {
                successNotify("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error("Error sending message:", error);
                errorNotify("Failed to send the message. Please try again.");
                setIsSubmitting(false);
            });
    };

    return (
        <div id="contact" className="container contact-container">
            <div className="row">

                <div className="col-md-6 contact-img">
                    <img
                        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHlhOTZkemQ2bzBqOThhNGVyM2E2cmp6eXJ5dDI0ZG0yNzhlbnJ1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
                        alt="contact"/>
                </div>

                <div className="col-md-6 contact-form">
                    <h2 align="center">Contact me</h2>

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="exampleName">
                                Name
                            </Label>
                            <Input
                                id="exampleName"
                                name="name"
                                placeholder="Write your name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
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
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Write message
                            </Label>
                            <Input
                                id="exampleMessage"
                                name="message"
                                placeholder="Write your message..."
                                type="textarea"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <Button outline type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Submit"}
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
                <ToastContainer/>
            </div>

        </div>
    )
}