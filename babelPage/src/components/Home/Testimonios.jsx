import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/styles.css"
import { motion } from "motion/react"
export default function TestimonialCarousel() {
    return (
        <div>
            <Container border="primary">
                <h2 className="text-center mb-4" data-aos="fade-up" data-aos-delay="200">Testimonios</h2>
                <Carousel data-aos="fade-up" data-aos-delay="100" className="border-0">
                    <Carousel.Item className="text-center">
                        <img
                            src='./images/Clientes/amazon.png'
                            className="rounded mx-auto mb-3"
                            alt={`Amazon`}
                            style={{ width: "150px", height: "100px" }}
                        />
                        <blockquote className="blockquote">
                            <p className="mb-3">Durante los años que llevamos trabajando con Babel, siempre hemos recibido servicio profesional, entregas puntuales y excelente calidad en el trabajo</p>
                            <h5 className="blockquote-footer">
                                {" "}
                                <cite title="Source Title">Ana Piedra</cite>
                            </h5>
                        </blockquote>
                    </Carousel.Item>

                    <Carousel.Item className="text-center">
                        <img
                            src='./images/Clientes/ernst-young.png'
                            className="rounded mx-auto mb-3"
                            alt={`Ernst-young`}
                            style={{ width: "150px", height: "100px" }}
                        />
                        <blockquote className="blockquote">
                            <p className="mb-3">Los trabajos traducidos que hemos solicitado a Babel son altamente profesionales, se trabaja con agilidad, rapidez y efectividad.</p>
                            <h5 className="blockquote-footer">
                                {" "}
                                <cite title="Source Title">Ana Piedra</cite>
                            </h5>
                        </blockquote>
                    </Carousel.Item>

                    <Carousel.Item className="text-center">
                        <img
                            src='./images/Clientes/pepsi.png'
                            className="rounded mx-auto mb-3"
                            alt={`Pepsi`}
                            style={{ width: "150px", height: "100px" }}
                        />
                        <blockquote className="blockquote">
                            <p className="mb-3">Para nosotros ha sido muy positivo trabajar con ustedes, la respuesta ha sido oportuna proporcionándonos muy buen servicio con base a nuestras necesidades y requerimientos.</p>
                            <h5 className="blockquote-footer">
                                {" "}
                                <cite title="Source Title">Ana Piedra</cite>
                            </h5>
                        </blockquote>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}
