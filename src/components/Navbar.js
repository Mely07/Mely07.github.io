import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Nav></Nav>
                <Navbar.Brand href="/"> DT </Navbar.Brand>

                <Nav className="col-sm-3">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">Projects</Nav.Link>
                    <Nav.Link href="/">Experience</Nav.Link>
                    <Nav.Link href="/">Contact</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;