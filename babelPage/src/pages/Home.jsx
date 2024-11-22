import React from "react";
import '../styles/styles.css';
import { useFetch } from "../api/useFetch";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from "../components/Services"

export default function Home() {
    const { data } = useFetch("/api/db.json");

    return (<>
        <section className="container-fluid">
            <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active c-item">
                        <img src="/images/carousel/1.jpg" className="d-block w-100 c-img" alt="..." />
                        <div class="carousel-caption top-0 mt-4">
                            <h1 className="mt-5 fs-3 text-uppercase">Babel Int</h1>
                            <h3 className="display-1 fw-bolder text-capitalize">Traducciones Profesionales</h3>
                            <button className="btn btn-primary px-4 py-2 fs-5 mt-5"><Link to='/weknow' className="text-white text-decoration-none">Cónocemos</Link></button>
                        </div>

                    </div>
                    <div className="carousel-item c-item">
                        <img src="/images/carousel/2.jpg" className="d-block w-100 c-img" alt="..." />
                        <div class="carousel-caption top-0 mt-4">
                            <h1 className="mt-5 fs-3 text-uppercase">¿Necesitas una cotizacion?</h1>
                            <h3 className="display-1 fw-bolder text-capitalize">Usa nuestro cotizador express</h3>
                            <button className="btn btn-primary px-4 py-2 fs-5 mt-5"><Link to='/quote_tool' className="text-white text-decoration-none">Cotizar</Link></button>
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


            {/* Colaboradores */}
            <div className="colaboradores">
                <h2>Traducciones Profesionales de inglés a español – Traducciones Profesionales de español a inglés – Todos los demás idiomas – Todos los sectores</h2>
                <div className="container">
                    {data && data.length > 0 ? (
                        <ul className="logoTable">
                            {data.map((company, index) => (
                                <li key={index}>
                                    <img src={company.logo || '/images/default-logo.jpg'} alt={`Logo de ${company.name}`} />
                                    <p>{company.name}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay datos disponibles.</p>
                    )}
                </div>
            </div>
            <div>
                <Services />
            </div>
        </section>

    </>
    );
}
