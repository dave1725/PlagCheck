import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navbar() {
    return (
        <Navbar expand="lg" style={{background: '#00000067', backdropFilter: 'blur(5px)', fontSize: '16pt', height: '8vh'}}>
            <Container>
                <Navbar.Brand eventkey="link-1" href="home" style={{fontSize: '18pt'}}>PlagCheck</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="tool">Tool</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default navbar;