import React from "react";
import '../styles/styles.css';
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "motion/react";

export default function Layout({ children }) {
    return (
        <div id="root">
            <header data-aos="fade-down">
                <Navbar expand="lg" style={{ padding: "10px" }}>
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src={'/images/logoBabel.png'} alt="Logo Babel"></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav" className="custom-font">
                            <Nav className="ms-auto">
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <Nav.Link as={Link} to="/services" className="text-black custom-font">SERVICIOS</Nav.Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <Nav.Link as={Link} to="/clients" className="text-black">CLIENTES</Nav.Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <Nav.Link as={Link} to="/quote_tool" className="text-black">COTIZADOR</Nav.Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <Nav.Link as={Link} to="/weknow" className="text-black">CONTACTO</Nav.Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <Nav.Link as={Link} to="/about" className="text-black">CONÓCENOS</Nav.Link>
                                </motion.div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            {/* Contenido principal */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer>
                <Container fluid style={{ padding: "40px" }}>
                    <Row>
                        <Col>
                            <img src='/images/logoBabel-modified.png' alt="Logo Babel" style={{ width: "200px", height: "auto" }}></img>
                        </Col>
                        <Col>
                            <h4 className="text-white">Contacto</h4>
                            <h5 className="text-white">+52 (55) 5604 9357</h5>
                            <h5 className="text-white">+52 (55) 5604 9088</h5>
                        </Col>
                        <Col>
                            <h4 className="text-white">Correo electrónico:</h4>
                            <h5 className="text-white">quotes@babelint.com</h5>
                        </Col>
                        <Col>
                            <h4>
                                <Link to="/weknow" className="text-white">Conócenos</Link>
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}
