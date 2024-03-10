import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navigation() {

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      navigate('/');
    } catch (err) {
      alert(e.response.data.message);
    }
  };

  if (localStorage.getItem("token") == null) {
    return (
      <Navbar expand="lg" className="bg-primary px-5">
        <Navbar.Brand className="text-white">Ключи.ТГУ</Navbar.Brand>
        <Navbar.Toggle aria-controls="web-navbar" />
        <Navbar.Collapse id="web-navbar">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" href="registration">
              Регистрация
            </Nav.Link>
            <Nav.Link className="text-white" href="login">
              Вход
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar expand="lg" className="bg-primary px-5">
        <Navbar.Brand className="text-white">Ключи.ТГУ</Navbar.Brand>
        <Navbar.Toggle aria-controls="web-navbar" />
        <Navbar.Collapse id="web-navbar">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" href="/keys">
              Ключи
            </Nav.Link>
            <Nav.Link className="text-white" href="/keys">
              Пользователи
            </Nav.Link>
            <Nav.Link className="text-white" href="/keys">
              Заявки
            </Nav.Link>
            <Nav.Link className="text-white" href="/keys">
              Профиль
            </Nav.Link>
            <Nav.Link className="text-white" href="/" onClick={handleSubmit}>
              Выход
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
