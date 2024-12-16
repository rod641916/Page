import React, { useEffect } from 'react';
import '../styles/styles.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from "../components/Home/Services"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sectors from '../components/Home/Sectors';
import TestimonialCarousel from '../components/Home/Testimonios';
import { motion } from "motion/react";
import Clientes from '../components/Home/Clientes';
import Divisor from '../components/Home/Divisor';
import { Container, Row, Col } from 'react-bootstrap';


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de las animaciones en milisegundos
            once: true,     // Si es `true`, las animaciones solo se ejecutan una vez
        });
    }, []);

    return (
        <div style={{ width: "100vw", margin: "0", padding: "0" }} className='custom-font'>
            <main className="bg-white" style={{ margin: "0", padding: "0" }}>
                <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up" style={{ width: "100%" }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active c-item">
                            <img src="/images/carousel/1.jpg" className="d-block w-100 c-img" alt="..." />
                            <div class="carousel-caption top-0 mt-4">
                                <h1 className="mt-5 fs-3 text-uppercase">Babel Int</h1>
                                <h3 className="display-1 fw-bolder text-capitalize">Traducciones Profesionales</h3>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <button className="btn btn-primary px-4 py-2 fs-5 mt-5"><Link to='/services' className="text-white text-decoration-none">Cónoce nuestros servicios</Link></button>
                                </motion.div>
                            </div>

                        </div>
                        <div className="carousel-item c-item">
                            <img src="/images/carousel/2.jpg" className="d-block w-100 c-img" alt="..." />
                            <div class="carousel-caption top-0 mt-4">
                                <h1 className="mt-5 fs-3 text-uppercase">¿Necesitas una cotizacion?</h1>
                                <h3 className="display-1 fw-bolder text-capitalize">Usa nuestro cotizador express</h3>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <button className="btn btn-primary px-4 py-2 fs-5 mt-5"><Link to='/quote_tool' className="text-white text-decoration-none">Cotizar</Link></button>
                                </motion.div>
                            </div>
                        </div>
                        <div className="carousel-item c-item">
                            <img src="/images/carousel/3.jpg" className="d-block w-100 c-img" alt="..." />
                            <div class="carousel-caption top-0 mt-4">
                                <h3 className="display-1 fw-bolder text-capitalize">Expertos en Traducción Profesional al Alcance de Tu Negocio</h3>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <br />
                <hr></hr>


                <Container fluid>
                    <Row>
                        {/* Columna 1: Imagen de fondo */}
                        <Col md={1} style={{
                            /*backgroundImage: "url('/images/portada.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100%",
                            minHeight: "100vh",*/
                        }}>
                        </Col>

                        {/* Columna 2: Contenido desde servicios hasta testimonios */}
                        <Col md={10}>

                            <Container>
                                <h2>¿Porque Babel?</h2>
                                <p style={{ textAlign: "justify" }}>Babel ofrece soluciones lingüísticas rápidas, precisas y a buen precio para las empresas más destacadas en el mundo de los negocios y nuestra cartera de clientes sigue creciendo de manera espectacular día a día. Nuestro equipo interno, igualmente estelar, está conformado por 60 talentosos y comprometidos profesionales, y reforzado con más de 200 profesionales independientes de comprobada eficacia, que abarcan todas las actividades comerciales en todos los idiomas.</p>
                                <p style={{ textAlign: "justify" }}>La comunicación efectiva es lo que permite que nuestro mundo funcione y, desde el principio, la misión de Babel ha sido construir puentes para que las personas se entiendan entre sí, independientemente del idioma y la cultura. En Babel celebramos esta diversidad como una bendición, como la fuerza motriz que nos permitirá crecer todos juntos, y como la esencia de la verdadera riqueza de la humanidad.</p>
                            </Container>

                            <div className="container-fluid">
                                {/* Servicios */}
                                <h2 data-aos="fade-up">Nuestros servicios</h2>
                                <Services />
                                <hr />

                                {/* Divisor */}
                                <Divisor />
                                <hr />

                                {/* Sectores */}
                                <Sectors />
                                <hr />

                                {/* Clientes */}
                                <Clientes />
                                <hr />

                                {/* Testimonios */}
                                <TestimonialCarousel />
                            </div>
                        </Col>

                        {/* Columna 3: Imagen de fondo */}
                        <Col md={1} style={{
                        }}>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}