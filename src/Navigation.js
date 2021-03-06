import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
export class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">

                    <Navbar.Brand href="#home">Cocktail App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/fav">Favorites</Nav.Link>
                    </Nav>

                </Navbar>
            </div>
        )
    }
}

export default Navigation
