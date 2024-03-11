import { Container, Card, Alert, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { instance } from "../Api/api";

function Profile() {
  const [data, setData] = useState([]);
  const [role, setRole] = useState([]);

  const handleGet = async () => {
    try {
      const response = await instance.get("user/" + localStorage.getItem('user'));
      setData(response.data);
    } catch (err) {
      alert(err);
    }
  };

  const handleGetRole = async () => {
    try {
      const response = await instance.get("api/role/" + localStorage.getItem('user'));
      setRole(response.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    handleGet();
    handleGetRole();
  }, []);

  return (
    <Container>
      <Card className="mt-3">
          <Card.Body>
            <Row>
              <Col xs={2} className="text-end">
                Логин
              </Col>
              <Col xs={10}>
                <Alert className="alert-primary">{data.userName}</Alert>
              </Col>
            </Row>
            <Row>
              <Col xs={2} className="text-end">
                Email
              </Col>
              <Col xs={10}>
              <Alert className="alert-primary">{data.userEmail}</Alert>
              </Col>
            </Row>
            <Row>
              <Col xs={2} className="text-end">
                Роль
              </Col>
              <Col xs={10}>
                <Alert className="alert-primary">role</Alert>
              </Col>
            </Row>
          </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
