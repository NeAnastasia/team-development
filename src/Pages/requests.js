import { Card, Container, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Requests() {

    if (true) {
        return (
            <Container>
                <div class="alert alert-primary mt-3 text-center" role="alert">
                    У вас нет заявок
                </div>
                <Link href="/newRequest">
                    Создать заявку <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </Link>
            </Container>
        );
    }
    else {
        <Card>
            <Card.Body>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Card.Body>
        </Card>
    }
}

export default Requests;
