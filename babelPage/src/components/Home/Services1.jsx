import { useFetch } from "../../api/useFetch";
import React from "react";
import "../../styles/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { motion } from "motion/react"

export default function Sectors() {
    const { data, loading, error } = useFetch("/api/db.json");

    const sectors = data?.sectors || [];

    if (loading) return <p>Cargando clientes</p>
    if (error) return <p>Error {error.message}</p>
    return (
        <>
            <Container data-aos="fade-up" data-aos-delay="100" className="border-0">
                {sectors.length > 0 ? (
                    <Row className="d-flex justify-content-center">
                        {sectors.map((sector, index) => (
                            <Col key={index} xs={12} sm={6} md={6} lg={6} className="mb-4">
                                <Card style={{ width: '100%', height: '100%' }} className="border-0">
                                    <Card.Img
                                        variant="top"
                                        src={sector.icon || '/images/default-logo.jpg'}
                                        alt={`Sector ${sector.name_es}`}
                                        className="card-img-custom"
                                        data-aos="fade-up" data-aos-delay="200"
                                    />
                                    <Card.Body>
                                        <Card.Title>{sector.name_es}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                ) : (
                    <p>No hay sectores disponibles.</p>
                )}
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Button href="/services">Conoce mas en</Button>
                </motion.div>
            </Container>


        </>
    )
}