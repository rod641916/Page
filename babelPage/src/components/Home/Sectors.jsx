import { useFetch } from "../../api/useFetch";
import React from "react";
import "../../styles/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { motion } from "motion/react";


export default function Sectors() {
    return (
        <Container className="py-5 split-section custom-font">
            <h2 style={{ textAlign: "center" }} data-aos="fade-up">Sectores en los que somos expertos</h2>
            <br />
            <Row className="align-items-center">
                {/* Columna de Texto */}
                <Col md={6} className="text-content" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="mb-4">Traducciones Jurídicas</h2>
                    <li style={{ fontSize: "large" }}>Licitaciones públicas</li>
                    <li style={{ fontSize: "large" }}>Contratos</li>
                    <li style={{ fontSize: "large" }}>Inmigración</li>
                    <li style={{ fontSize: "large" }}>Convenios de confidencialidad</li>
                    <li style={{ fontSize: "large" }}>Demandas, juicios, resoluciones y apelaciones</li>
                    <li style={{ fontSize: "large" }}>Poderes</li>
                    <li style={{ fontSize: "large" }}>..mas</li>

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
                <Col md={6} className="image-content order-last order-md-1">
                    <img
                        src="/images/Sectores/farmaceutico.png"
                        alt="Descripción de la imagen"
                        className="img-fluid rounded"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        style={{ filter: "brightness(90%)" }}
                    />
                </Col>
                <Col md={6} className="text-content order-first order-md-2" data-aos="fade-up" data-aos-delay="400">
                    <h2 className="mb-4">Traducciones Médicas/Farma</h2>
                    <li style={{ fontSize: "large" }}>Expedientes</li>
                    <li style={{ fontSize: "large" }}>Artículos de investigación</li>
                    <li style={{ fontSize: "large" }}>Regulatorio</li>
                    <li style={{ fontSize: "large" }}>Certificados de análisis</li>
                    <li style={{ fontSize: "large" }}>Pruebas de estabilidad</li>
                    <li style={{ fontSize: "large" }}>Procedimientos con COFEPRIS, la FDA y otras autoridades sanitarias</li>
                    <li style={{ fontSize: "large" }}>..mas</li>
                    <br />
                    <Button variant="primary" href="/services">Leer más</Button>
                </Col>
            </Row>

            <br />

            <Row className="align-items-center">
                {/* Columna de Texto */}
                <Col md={6} className="text-content" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="mb-4">Traducciones de Tecnología</h2>
                    <li style={{ fontSize: "large" }}>Telecomunicaciones</li>
                    <li style={{ fontSize: "large" }}>Ciberseguridad</li>
                    <li style={{ fontSize: "large" }}>Servicio en la nube</li>
                    <li style={{ fontSize: "large" }}>Manuales de usuario</li>
                    <li style={{ fontSize: "large" }}>Sitios web</li>
                    <li style={{ fontSize: "large" }}>Software y programación</li>
                    <li style={{ fontSize: "large" }}>..mas</li>

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