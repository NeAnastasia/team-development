import { Card, Row, Col, Button } from "react-bootstrap";
import TimeAndDate from "./time-and-date";

function RequestCard({name, keyId}) {

    return (
        <Card className="mt-3">
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <div class="alert alert-primary mt-3 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-closed" viewBox="0 0 16 16">
                                <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z" />
                                <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
                            </svg>
                            {keyId}
                        </div>
                    </Col>
                    <Col xs={7}>
                        <Row className="justify-content-center">
                            {name}
                        </Row>
                        <TimeAndDate />
                    </Col>
                    <Col>
                        <Row className="me-1">
                            <Button className="btn-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                                <span className="ps-2">Одобрить</span>
                            </Button>
                        </Row>
                        <Row className="me-1 mt-2">
                            <Button className="btn-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                </svg>
                                <span className="ps-2">Отклонить</span>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default RequestCard;