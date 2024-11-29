import React from "react";
import "../../styles/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { motion } from "motion/react"

export default function Services() {
    return (
        <>
            <Container >
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {/* Traducción de documentos */}
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Card style={{ width: '18rem' }} data-aos="fade-up" data-aos-delay="100" className="border-0">
                            <Card.Img variant="top" src="/images/Servicios/traduccion.png" className="h-75" />
                            <Card.Body>
                                <Card.Title><Link to="/services">Traducción de Documentos</Link></Card.Title>
                                <Card.Text>
                                    Traducción de documentos rápidos, asequibles y hechos por expertos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>

                    {/* Corrección de textos */}
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Card style={{ width: '18rem' }} data-aos="fade-up" data-aos-delay="200" className="border-0">
                            <Card.Img variant="top" src="/images/Servicios/Correccion.png" className="h-75" />
                            <Card.Body>
                                <Card.Title><Link to="/services">Corrección de textos</Link></Card.Title>
                                <Card.Text>
                                    Especialistas en la redacción, tono, sintaxis y estilo de cualquier tipo de documento.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>

                    {/* Interpretación */}
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Card style={{ width: '18rem' }} data-aos="fade-up" data-aos-delay="300" className="border-0">
                            <Card.Img variant="top" src="/images/Servicios/Interpretacion.png" className="h-75" />
                            <Card.Body>
                                <Card.Title><Link to="/services">Interpretación</Link></Card.Title>
                                <Card.Text>
                                    Servicios de interpretación profesionales a distancia y presenciales de alta calidad.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>

                    {/* Transcripción */}
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Card style={{ width: '18rem' }} data-aos="fade-up" data-aos-delay="400" className="border-0">
                            <Card.Img variant="top" src="/images/Servicios/transcripción.png" className="h-75" />
                            <Card.Body>
                                <Card.Title><Link to="/services">Transcripción</Link></Card.Title>
                                <Card.Text>
                                    Transcripción de video, audio y texto para todo tipo de negocios e idioma.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </div>
                <br />
                <div className="d-flex justify-content-center">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Button
                            variant="primary"
                            className="justify-content-center"
                            href='/services'
                            data-aos="zoom-in"
                            data-aos-delay="500">
                            Ver todos los servicios
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </>
    );
}
