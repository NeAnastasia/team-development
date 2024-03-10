import { Card, Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { instance } from "../Api/api";

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post(
        "auth/register",
        JSON.stringify({ username, email, password })
      );
    } catch (err) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header className="h3">
          Регистрация нового пользователя
        </Card.Header>
        <Form>
          <Card.Body>
            <Form.Group className="mb-3" controlId="FIO-form">
              <Form.Label>Юзерейм (логин)</Form.Label>
              <Form.Control
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              <Form.Text>Пароль должен включать в себя как минимум: символ верхнего регистра, символ нижнего регистра, цифру, и быть не менее 8 символов в длину</Form.Text>
            </Form.Group>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button onClick={handleSubmit}>Зарегестрироваться</Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
}

export default Registration;
