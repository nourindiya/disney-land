import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css"

const Header = () => {

    const { user, logOut } = useAuth()

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="nav" variant="light">
                <Container >
                    <Navbar.Brand className="text-light" href="#home">Disney Land</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="link" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/add">Add Activity</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/contact">Contact</Nav.Link>
                        {
                            user.email &&
                            <Navbar.Text className="mx-2 text-light">
                                User: {user.displayName}
                            </Navbar.Text>
                        }

                        {
                            user.email ?

                                <button className="btn-2" onClick={logOut} type="submit">Log Out</button>

                                :
                                <Nav.Link className="link" as={Link} to="/login">Log In</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;