import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>

            <Navbar bg="dark" variant="dark">
                
                <Container>
                <Navbar.Brand href="#home">Alumni</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#register">Registration</Nav.Link>
                        <Nav.Link href="#pricing">StudentsAlumni</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;