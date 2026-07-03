import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext)
  const [agregado, setAgregado] = useState(false)

  const handleAdd = (cantidad) => {
    addItem(producto, cantidad)
    setAgregado(true)
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
      <p>Stock disponible: {producto.stock}</p>

      {!agregado ? (
        <ItemCount stock={producto.stock} onAdd={handleAdd} />
      ) : (
        <p style={{ color: "green" }}>✅ Producto agregado al carrito</p>
      )}

      <div style={{ marginTop: "20px" }}>
        <Link to="/">Volver al catálogo</Link>
      </div>
    </div>
  )
}

export default ItemDetail