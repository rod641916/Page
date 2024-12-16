import React from "react";
import { Container, Image } from 'react-bootstrap'
import '../../styles/styles.css';

export default function Divisor() {
    return (
        <Container fluid className="d-flex justify-content-center">
            <Image fluid src="/images/carousel/numero.png" className="custom-image" />
        </Container>
    );
}