import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Dropdown, Col, Row } from 'react-bootstrap';
import useQuote from '../hooks/useQuote';
import "../styles/styles.css";
import 'aos/dist/aos.css';
import { motion } from "motion/react";
import AOS from 'aos';


export default function QuoteTool() {


    const {
        idiomaOrigen,
        idiomaDestino,
        seleccionIdiomaDestino,
        seleccionIdiomaOrigen,
        Calcular,
        cantidadPalabras,
        asignacionCantidadPalabras,
        documentoEditable,
        seleccionDocumentoEditable,
    } = useQuote();

    return (
        <Container>
            <Form>
                {/* Primera fila: Idioma Origen y Idioma Destino */}
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="idiomaOrigen">
                            <Form.Label>Idioma Origen</Form.Label>
                            <Dropdown onSelect={seleccionIdiomaOrigen}>
                                <Dropdown.Toggle variant="success" id="idiomaOrigen" style={{ width: '240px', textAlign: 'left' }}>
                                    {idiomaOrigen || 'Seleccione un idioma origen'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="Español">Español</Dropdown.Item>
                                    <Dropdown.Item eventKey="Inglés">Inglés</Dropdown.Item>
                                    <Dropdown.Item eventKey="Portugués">Portugués</Dropdown.Item>
                                    <Dropdown.Item eventKey="Italiano">Italiano</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group controlId="idiomaDestino">
                            <Form.Label>Idioma Destino</Form.Label>
                            <Dropdown onSelect={seleccionIdiomaDestino} >
                                <Dropdown.Toggle variant="success" id="idiomaDestino" style={{ width: '240px', textAlign: 'left' }}>
                                    {idiomaDestino || 'Seleccione un idioma destino'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="Español">Español</Dropdown.Item>
                                    <Dropdown.Item eventKey="Inglés">Inglés</Dropdown.Item>
                                    <Dropdown.Item eventKey="Portugués">Portugués</Dropdown.Item>
                                    <Dropdown.Item eventKey="Italiano">Italiano</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Segunda fila: Documento editable */}
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="documentoEditable">
                            <Form.Label>¿Documento editable?</Form.Label>
                            <Dropdown onSelect={seleccionDocumentoEditable}>
                                <Dropdown.Toggle variant="success" id="documentoEditable">
                                    {documentoEditable || 'Seleccione uno'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="Si">Si</Dropdown.Item>
                                    <Dropdown.Item eventKey="No">No</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Col>

                    {/* Tercera fila: Cantidad de palabras */}
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Cantidad de palabras</Form.Label>
                            <Form.Control
                                type="number"
                                min="50"
                                placeholder="Ingrese el número aproximado de palabras de su documento"
                                value={cantidadPalabras}
                                onChange={asignacionCantidadPalabras}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Botón para calcular */}
                <Row>
                    <Col md={12} className="text-center">
                        <Button variant="primary" type="button" onClick={Calcular}>
                            Calcular
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
