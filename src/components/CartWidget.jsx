import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { Badge } from "react-bootstrap"

const CartWidget = () => {
  const { totalUnidades } = useContext(CartContext)

  return (
    <Link to="/carrito" style={{ color: "white", position: "relative", textDecoration: "none" }}>
      🛒
      {totalUnidades() > 0 && (
        <Badge bg="danger" style={{ marginLeft: "5px" }}>
          {totalUnidades()}
        </Badge>
      )}
    </Link>
  )
}

export default CartWidget