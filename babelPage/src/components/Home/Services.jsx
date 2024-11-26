import React from "react";
import "../../styles/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container } from 'react-bootstrap';

export default function Services() {
    return (
        <>
            <Container>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {/* Traducción de documentos */}
                    <Card style={{ width: '18rem' }} data-aos="fade-up"  data-aos-delay="100" className="border-0">
                        <Card.Img variant="top" src="/images/Servicios/traduccion.png" className="h-75" />
                        <Card.Body>
                            <Card.Title>Traducción de Documentos</Card.Title>
                            <Card.Text>
                                Traducción de documentos rápidos, asequibles y hechos por expertos.
                            </Card.Text>
                            <Button variant="primary">Conoce más</Button>
                        </Card.Body>
                    </Card>

                    {/* Corrección de textos */}
                    <Card style={{ width: '18rem' }} data-aos="fade-up"  data-aos-delay="200" className="border-0">
                        <Card.Img variant="top" src="/images/Servicios/Correccion.png" className="h-75" />
                        <Card.Body>
                            <Card.Title>Corrección de textos</Card.Title>
                            <Card.Text>
                                Especialistas en la redacción, tono, sintaxis y estilo de cualquier tipo de documento.
                            </Card.Text>
                            <Button variant="primary">Conoce más</Button>
                        </Card.Body>
                    </Card>

                    {/* Interpretación */}
                    <Card style={{ width: '18rem' }} data-aos="fade-up"  data-aos-delay="300" className="border-0">
                        <Card.Img variant="top" src="/images/Servicios/Interpretacion.png" className="h-75" />
                        <Card.Body>
                            <Card.Title>Interpretación</Card.Title>
                            <Card.Text>
                                Servicios de interpretación profesionales a distancia y presenciales de alta calidad.
                            </Card.Text>
                            <Button variant="primary">Conoce más</Button>
                        </Card.Body>
                    </Card>

                    {/* Transcripción */}
                    <Card style={{ width: '18rem' }} data-aos="fade-up"  data-aos-delay="400" className="border-0">
                        <Card.Img variant="top" src="/images/Servicios/transcripción.png" className="h-75" />
                        <Card.Body>
                            <Card.Title>Transcripción</Card.Title>
                            <Card.Text>
                                Transcripción de video, audio y texto para todo tipo de negocios e idioma.
                            </Card.Text>
                            <Button variant="primary">Conoce más</Button>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="d-flex justify-content-center">
                    <Button
                        variant="primary"
                        className="justify-content-center"
                        href='/services'
                        data-aos="zoom-in"
                        data-aos-delay="500"
                    >
                        Ver todos los servicios
                    </Button>
                </div>
            </Container>
        </>
    );
}
