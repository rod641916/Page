import React from "react";
import '../styles/styles.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
    return (
        <div>
            <header data-aos="fade-down">
                <Navbar className="bg-dark navbar-dark" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src='/images/logoBabel-modified.png' alt="Logo Babel"></img>
                        </Navbar.Brand>

                        {/* Botón de hamburguesa para dispositivos pequeños */}
                        <Navbar.Toggle aria-controls="navbar-nav"/>

                        {/* Elementos del menú */}
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/services" className="text-white">SERVICIOS</Nav.Link>
                                <Nav.Link as={Link} to="/clients" className="text-white">CLIENTES</Nav.Link>
                                <Nav.Link as={Link} to="/quote_tool" className="text-white">COTIZADOR</Nav.Link>
                                <Nav.Link as={Link} to="/weknow" className="text-white">CONTACTO</Nav.Link>
                                <Nav.Link as={Link} to="/about" className="text-white">CONÓCENOS</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>{children}</main> {/* Esto es importante para que se renderice en todo*/}
        </div>
    );
};
