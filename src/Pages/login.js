import { Card, Container, Form, Button, Alert } from "react-bootstrap";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../Api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post(
        "api/auth/login",
        JSON.stringify({ email, password })
      ); 
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.user);
      navigate('/');
    } catch (err) {
      alert(err);
    }
  };

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
            <Button type="submit" onClick={handleSubmit}>
              Войти
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
