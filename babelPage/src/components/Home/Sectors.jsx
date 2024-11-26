import { useFetch } from "../../api/useFetch";
import React from "react";
import "../../styles/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container } from 'react-bootstrap';

export default function Sectors() {
    const { data, loading, error } = useFetch("/api/db.json");

    const sectors = data?.sectors || [];

    if (loading) return <p>Cargando clientes</p>
    if (error) return <p>Error {error.message}</p>
    return (
        <>
            <div>
                {sectors.length > 0 ? (
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                        {sectors.map((sector, index) => (
                            <Card
                                style={{ width: '10rem', height: 'auto'}}
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay="100"
                                border="none"
                            >
                                <Card.Img
                                    variant="top"
                                    src={sector.icon || '/images/default-logo.jpg'}
                                    alt={`Sector ${sector.name_es}`}
                                    className="h-20"
                                />
                                <Card.Body>
                                    <Card.Title>{sector.name_es}</Card.Title>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p>No hay sectores disponibles.</p>
                )}
            </div>

        </>
    )
}