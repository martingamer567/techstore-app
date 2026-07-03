import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">TechStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/categoria/Refrigeracion">Refrigeración</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Televisores">Televisores</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Audio">Audio</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Computacion">Computación</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar