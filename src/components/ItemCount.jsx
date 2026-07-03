import { useState } from "react"
import { Button } from "react-bootstrap"

const ItemCount = ({ stock, inicial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial)

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  if (stock === 0) {
    return <p style={{ color: "red" }}>Sin stock disponible</p>
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "15px" }}>
      <Button variant="outline-dark" onClick={restar} disabled={cantidad <= 1}>
        -
      </Button>
      <span style={{ fontSize: "1.2rem" }}>{cantidad}</span>
      <Button variant="outline-dark" onClick={sumar} disabled={cantidad >= stock}>
        +
      </Button>
      <Button variant="dark" onClick={() => onAdd(cantidad)} style={{ marginLeft: "15px" }}>
        Agregar al carrito
      </Button>
    </div>
  )
}

export default ItemCount