import { Card, Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { registration } from "../Api/Actions/auth";

function Registration() {
  const [Nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <Container>
      <Card className="mt-5">
        <Card.Header className="h3">
          Регистрация нового пользователя
        </Card.Header>
        <Form>
          <Card.Body>
            <Form.Group className="mb-3" controlId="FIO-form">
              <Form.Label>Никнейм</Form.Label>
              <Form.Control
                placeholder="Username"
                value={Nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email-form">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="person@mail.com"
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
            <Form.Group className="mb-3" controlId="PasswordRepeat-form">
              <Form.Label>Подтверждение пароля</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button onClick={() => registration(Nickname, email, password)}>Зарегестрироваться</Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
}

export default Registration;
