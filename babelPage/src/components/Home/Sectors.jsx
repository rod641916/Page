import { useFetch } from "../../api/useFetch";
import React from "react";
import "../../styles/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { motion } from "motion/react";


export default function Sectors() {
    return (
        <Container fluid className="py-5 split-section">
            <h2 style={{ textAlign: "center" }} data-aos="fade-up">Sectores en los que somos expertos</h2>
            <br />
            <Row className="align-items-center">
                {/* Columna de Texto */}
                <Col md={6} className="text-content" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="mb-4">Traducciones Jurídicas</h2>
                    <li style={{fontSize:"x-large"}}>Licitaciones públicas</li>
                    <li style={{fontSize:"x-large"}}>Contratos</li>
                    <li style={{fontSize:"x-large"}}>Inmigración</li>
                    <li style={{fontSize:"x-large"}}>Convenios de confidencialidad</li>
                    <li style={{fontSize:"x-large"}}>Demandas, juicios, resoluciones y apelaciones</li>
                    <li style={{fontSize:"x-large"}}>Poderes</li>
                    <li style={{fontSize:"x-large"}}>..mas</li>

                    <br />
                    <Button variant="primary">Leer más</Button>
                </Col>
                {/* Columna de Imagen */}
                <Col md={6} className="image-content">
                    <img
                        src="/images/Sectores/juridica.png"
                        alt="Descripción de la imagen"
                        className="img-fluid rounded"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    />
                </Col>
            </Row>

            <br />

            <Row className="align-items-center">
                {/* Columna de Imagen */}
                <Col md={6} className="image-content">
                    <img
                        src="/images/Sectores/farmaceutico.png"
                        alt="Descripción de la imagen"
                        className="img-fluid rounded"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    />
                </Col>
                <Col md={6} className="text-content" data-aos="fade-up" data-aos-delay="400">
                    <h2 className="mb-4">Traducciones Médicas/Farma</h2>
                    <li style={{fontSize:"x-large"}}>Expedientes</li>
                    <li style={{fontSize:"x-large"}}>Artículos de investigación</li>
                    <li style={{fontSize:"x-large"}}>Regulatorio</li>
                    <li style={{fontSize:"x-large"}}>Certificados de análisis</li>
                    <li style={{fontSize:"x-large"}}>Pruebas de estabilidad</li>
                    <li style={{fontSize:"x-large"}}>Procedimientos con COFEPRIS, la FDA y otras autoridades sanitarias</li>
                    <li style={{fontSize:"x-large"}}>..mas</li>
                    <br />
                    <Button variant="primary" href="/services">Leer más</Button>
                </Col>
            </Row>

            <br />

            <Row className="align-items-center">
                {/* Columna de Texto */}
                <Col md={6} className="text-content" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="mb-4">Traducciones de Tecnología</h2>
                    <li style={{fontSize:"x-large"}}>Telecomunicaciones</li>
                    <li style={{fontSize:"x-large"}}>Ciberseguridad</li>
                    <li style={{fontSize:"x-large"}}>Servicio en la nube</li>
                    <li style={{fontSize:"x-large"}}>Manuales de usuario</li>
                    <li style={{fontSize:"x-large"}}>Sitios web</li>
                    <li style={{fontSize:"x-large"}}>Software y programación</li>
                    <li style={{fontSize:"x-large"}}>..mas</li>

                    <br />
                    <Button variant="primary">Leer más</Button>
                </Col>
                {/* Columna de Imagen */}
                <Col md={6} className="image-content">
                    <img
                        src="/images/Sectores/tecnologia.png"
                        alt="Descripción de la imagen"
                        className="img-fluid rounded"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    />
                </Col>
            </Row>
        </Container>
    )
}