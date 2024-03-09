import { Card, Container, Row, Col } from "react-bootstrap";
import RequestCard from "../Components/request-card";
import RequestModal from "../Components/request-modal";

function Requests() {

    if (true) {
        return (
            <Container>
                <div class="alert alert-primary mt-3 text-center" role="alert">
                   Нет заявок
                </div>
            </Container>
        );
    }
    else {
        return (<Container>
            <Row>
                <Col xs={6}>
                    <RequestCard />
                </Col>
                <Col xs={6}>
                    <RequestCard />
                </Col>
            </Row>
        </Container>
        
        );
    }
}

export default Requests;
