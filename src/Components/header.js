import { Navbar, Nav} from 'react-bootstrap';

function Navigation() {
  return (
<Navbar expand="lg" className="bg-primary px-5">
        <Navbar.Brand className='text-white'>Ключи.ТГУ</Navbar.Brand>
        <Navbar.Toggle aria-controls="web-navbar" />
        <Navbar.Collapse id="web-navbar">
          <Nav className="ms-auto">
            <Nav.Link className='text-white' href="registration">Регистрация</Nav.Link>
            <Nav.Link className='text-white' href="login">Вход</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;