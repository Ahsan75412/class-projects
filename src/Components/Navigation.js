import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>

            <Navbar bg="dark" variant="dark">

                <Container>
                    <Navbar.Brand href="/home">Alumni</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="register">Registration</Nav.Link>
                        <Nav.Link as={Link} to="students">StudentsAlumni</Nav.Link>
    
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;