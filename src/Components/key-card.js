import { Card, Row, Col, Alert } from "react-bootstrap";
import KeyStatus from "./key-status";

function KeyCard({ number, state, userId }) {
  return (
      <Col xs={6}>
        <Card className="mt-3 pe-4">
          <Card.Body>
            <Row>
              <Col xs={3}>
                <div className="alert alert-primary mt-3 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-key"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                </div>
              </Col>
              <Col xs={3} className="align-self-center text-center">
                <span>{number}</span>
              </Col>
              <Col xs={6} className="align-self-center pe-3 pt-3">
                <KeyStatus state={state} userId={userId} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
  );
}

export default KeyCard;
