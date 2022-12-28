import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BFStudiosLogo from '../../components/images/BFStudiosLogo.png';
import { LogoContainer, LogoImg  } from "../styles/MainNavStyles";

const MainNavbar = () => (
  <>
    <Navbar fixed="top" bg="white" expand="lg">
    <Container>
      <Navbar.Brand>
        <LogoContainer>
          <Link to='/'>
            <LogoImg 
              src={BFStudiosLogo} 
              alt="logo" 
              effect="blur"
            />
          </Link>
        </LogoContainer>
      </Navbar.Brand>
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
              <li>Contact</li>
            </Link>
          </Nav.Link>
          <NavDropdown title="Add a Contact" id="basic-nav-dropdown">
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