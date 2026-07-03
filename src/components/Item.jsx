import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"

const Item = ({ producto }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={`/${producto.imagen}`}
        style={{ height: "200px", objectFit: "contain", padding: "10px" }}
      />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          ${producto.precio.toLocaleString("es-AR")}
        </Card.Text>
        <Card.Text>
          <small className="text-muted">Categoría: {producto.categoria}</small>
        </Card.Text>
        <Link to={`/producto/${producto.id}`}>
          <Button variant="dark">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item