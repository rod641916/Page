import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/styles.css"

export default function TestimonialCarousel() {
    return (
        <Container border="primary">
            <h2 className="text-center mb-4" data-aos="fade-up" data-aos-delay="100">Testimonios</h2>
            <Carousel>
                <Carousel.Item className="text-center">
                    <img
                        src='./images/Clientes/amazon.png'
                        className="rounded-circle mx-auto mb-3"
                        alt={`Amazon`}
                        style={{ width: "100px", height: "100px" }}
                    />
                    <blockquote className="blockquote">
                        <p className="mb-3">Durante los años que llevamos trabajando con Babel, siempre hemos recibido servicio profesional, entregas puntuales y excelente calidad en el trabajo</p>
                        <footer className="blockquote-footer">
                            {" "}
                            <cite title="Source Title">Ana Piedra</cite>
                        </footer>
                    </blockquote>
                </Carousel.Item>

                <Carousel.Item className="text-center">
                    <img
                        src='./images/Clientes/ernst-young.png'
                        className="rounded-circle mx-auto mb-3"
                        alt={`Ernst-young`}
                        style={{ width: "100px", height: "100px" }}
                    />
                    <blockquote className="blockquote">
                        <p className="mb-3">Los trabajos traducidos que hemos solicitado a Babel son altamente profesionales, se trabaja con agilidad, rapidez y efectividad.</p>
                        <footer className="blockquote-footer">
                            {" "}
                            <cite title="Source Title">Sonia Serrano Colorado</cite>
                        </footer>
                    </blockquote>
                </Carousel.Item>

                <Carousel.Item className="text-center">
                    <img
                        src='./images/Clientes/pepsi.png'
                        className="rounded-circle mx-auto mb-3"
                        alt={`Pepsi`}
                        style={{ width: "100px", height: "100px" }}
                    />
                    <blockquote className="blockquote">
                        <p className="mb-3">Para nosotros ha sido muy positivo trabajar con ustedes, la respuesta ha sido oportuna proporcionándonos muy buen servicio con base en las necesidades y requerimientos de nuestra área Legal.</p>
                        <footer className="blockquote-footer">
                            {" "}
                            <cite title="Source Title">Sandra Sánchez</cite>
                        </footer>
                    </blockquote>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}
