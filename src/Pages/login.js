import { Card, Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header className="h3">Авторизация</Card.Header>
        <Form>
          <Card.Body>
            <Form.Group className="mb-3" controlId="Email-form">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password-form">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button type="submit">Войти</Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
