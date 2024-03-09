import { useState } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TimeAndDate from './time-and-date';

function RequestModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Row>
                        <Col xs={1} className='ms-auto me-3'>
                            <Button size="sm" variant="secondary" onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                </svg>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Row className='ms-2'>
                            Смирнова Светлана
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <div class="alert alert-primary mt-3 ms-2 text-center">
                                    Студент
                                </div>
                            </Col>
                        </Row>
                        <Row className='ms-2'>
                            Аудитория
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <div class="alert alert-primary mt-3 ms-2 text-center">
                                    333
                                </div>
                            </Col>
                            <Col className='align-self-center'>
                                <TimeAndDate />
                            </Col>
                        </Row>
                        <Row className='ms-2'>
                            Название
                        </Row>
                        <Row>
                            <div className="ms-3 alert alert-primary mt-3 text-center">
                                Чаепитие
                            </div>
                        </Row>
                        <Row className='ms-2'>
                            Описание
                        </Row>
                        <Row>
                            <div className="ms-3 alert alert-primary mt-3 text-center">
                                Займём на чай
                            </div>
                        </Row>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Одобрить
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Отклонить
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default RequestModal;