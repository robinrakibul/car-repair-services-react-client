import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container className='d-flex justify-content-between'>
                    <div>
                        <Navbar.Brand href="#home"><img src={logo} alt="" height="35px" /></Navbar.Brand>
                    </div>
                    <div>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;