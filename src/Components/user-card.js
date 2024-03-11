import { Card, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Checked from "./checkers";

function UserCard({ userName, userEmail, roles }) {
  const [checkStudent, setCheckStudent] = useState(false);
  const [checkTeacher, setCheckTeacher] = useState(false);
  const [checkDeanery, setCheckDeanery] = useState(false);

  useEffect(() => {
  if (roles.length != 0) {
    for (let i = 0; i < roles.length; i++) {
      if (roles[i] === 'Teacher') {
        setCheckTeacher(true);
      } else
      if (roles[i] === 'Student') {
        setCheckStudent(true);
      } else
      if (roles[i] === 'Deanery') {
        setCheckDeanery(true);
      }
    }
  }}, []);

  return (
    <Col xs={6}>
      <Card className="mt-3 pe-4">
        <Card.Body>
          <Row>
            <Col xs={3} className="align-self-center">
              {userName}
            </Col>
            <Col xs={6} className="align-self-center text-center">
              {userEmail}
            </Col>
            <Col xs={3} className="align-self-center pe-3 pt-3">
              <Form>
                <Row>
                  <Checked
                    label="Студент"
                    id="Student"
                    checked={checkStudent}
                    Email={userEmail}
                    apiAdd="api/role/add/student"
                    apiDelete="api/role/remove/student"
                  />
                </Row>
                <Row>
                  <Checked
                    label="Преподаватель"
                    id="Teacher"
                    checked={checkTeacher}
                    Email={userEmail}
                    apiAdd="api/role/add/teacher"
                    apiDelete="api/role/remove/teacher"
                  />
                </Row>
                <Row>
                  <Checked
                    label="Деканат"
                    id="Deanery"
                    checked={checkDeanery}
                    Email={userEmail}
                    apiAdd="api/role/add/deanery"
                    apiDelete="api/role/remove/deanery"
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
