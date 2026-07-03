import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { Button, Table } from "react-bootstrap"

const Cart = () => {
  const { cart, removeItem, clear, totalPrecio } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Ir al catálogo</Link>
      </div>
    )
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Carrito de compras</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio}</td>
              <td>${item.precio * item.cantidad}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>
                  Quitar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Total: ${totalPrecio()}</h3>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <Button variant="outline-dark" onClick={clear}>Vaciar carrito</Button>
        <Link to="/checkout">
          <Button variant="dark">Finalizar compra</Button>
        </Link>
        <Link to="/">
          <Button variant="outline-secondary">Seguir comprando</Button>
        </Link>
      </div>
    </div>
  )
}

export default Cart