import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap'

class Navigation extends Component {
    render(){
        return(
            <Navbar bg="success" variant="dark">
                <Navbar.Brand href="/">BOOKSTORE SMART</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/favourties">Favourites</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
export default Navigation;