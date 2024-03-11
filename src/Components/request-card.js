import { Card, Row, Col, Button } from "react-bootstrap";
import TimeAndDate from "./time-and-date";
import StatesModal from "./states-modal";

function RequestCard({ name, keyId, date, periodId, id, state }) {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Row>
          <Col xs={2}>
            <div className="alert alert-primary mt-3 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-door-closed"
                viewBox="0 0 16 16"
              >
                <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z" />
                <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
              </svg>
              {keyId}
            </div>
          </Col>
          <Col xs={7}>
            <Row className="justify-content-center">{name}</Row>
            <TimeAndDate periodId={periodId} date={date} />
          </Col>
          <Col>
            <StatesModal requestId={id} state={state} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default RequestCard;
