import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MainNavbar = () => (
  <>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand>BF</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="">
          <Nav.Link>
            <Link to='/'>
              <li>Home</li>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/projects'>
              <li>Projects</li>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/contactme'>
              <li>Contact Me</li>
            </Link>
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to='/contacts'>
              <li>Contacts</li>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  </>
)

export default MainNavbar;