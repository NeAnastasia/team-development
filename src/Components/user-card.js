import { Card, Row, Col, Form } from "react-bootstrap";
import KeyStatus from "./key-status";

function UserCard({ userName, userEmail }) {
    

  return (
    <Col xs={6}>
      <Card className="mt-3 pe-4">
        <Card.Body>
          <Row>
            <Col xs={3} className="align-self-center">{userName}</Col>
            <Col xs={6} className="align-self-center text-center">
              {userEmail}
            </Col>
            <Col xs={3} className="align-self-center pe-3 pt-3">
              <Form>
                <Row>
                  <Form.Check
                    reverse
                    label="Студент"
                    id="student"
                  />
                </Row>
                <Row>
                  <Form.Check
                    reverse
                    label="Преподаватель"
                    id="teacher"
                  />
                </Row>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default UserCard;
