import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap"
import CartWidget from "./CartWidget"

const NavBar = () => {
  const [busqueda, setBusqueda] = useState("")
  const navigate = useNavigate()

  const handleBuscar = (e) => {
    e.preventDefault()
    if (busqueda.trim() !== "") {
      navigate(`/buscar/${busqueda.trim()}`)
    }
  }

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

          <Form className="d-flex" onSubmit={handleBuscar} style={{ marginRight: "15px" }}>
            <Form.Control
              type="search"
              placeholder="Buscar producto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{ marginRight: "8px" }}
            />
            <Button variant="outline-light" type="submit">Buscar</Button>
          </Form>

          <Button
            as="a"
            href="https://github.com/martingamer567/techstore-app"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-light"
            style={{ marginRight: "15px", whiteSpace: "nowrap" }}
          >
            GitHub
          </Button>

          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar