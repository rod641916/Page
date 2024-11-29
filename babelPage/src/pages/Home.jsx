import React, { useEffect } from 'react';
import '../styles/styles.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from "../components/Home/Services"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sectors from '../components/Home/Sectors';
import TestimonialCarousel from '../components/Home/Testimonios';
import { Container } from 'react-bootstrap';
import { motion } from "motion/react";
import Clientes from '../components/Home/Clientes';


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de las animaciones en milisegundos
            once: true,     // Si es `true`, las animaciones solo se ejecutan una vez
        });
    }, []);

    return (
        <div style={{ width: "100vw", margin: "0", padding: "0" }}>
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
                                <h1 className="mt-5 fs-3 text-uppercase">Ya no se que poner</h1>
                                <h3 className="display-1 fw-bolder text-capitalize">Esto se puede modificar y adaptar =D</h3>
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
                {/* Servicios*/}
                <div className="colaboradores">
                    <h2 data-aos="fade-up">Nuestros servicios</h2>
                </div>
                <br />
                <br />
                <div className="container-fluid">
                    <Services />
                </div>
                <br />
                <hr></hr>
                {/*Sectores*/}
                <div style={{ width: "100vw", margin: "0", padding: "10px" }}>
                    <Sectors />
                </div>
                <hr></hr>
                <br />
                <div style={{ width: "100vw", margin: "0", padding: "0" }}>
                    <Clientes />
                </div>
                <hr></hr>
                <div style={{ width: "100vw", margin: "0", padding: "0" }} >
                    <TestimonialCarousel />
                </div>
                <div>
                </div>
            </main>
        </div>
    );
}
