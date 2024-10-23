import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";


export default function Header(args) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar fixed="top" color="light" light expand="md" className="App-navbar">
                <NavbarBrand className="nav-brand" href="/">Md. Sajjad Hossain</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="#">Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="#">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="#">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}