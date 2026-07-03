import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"
import Swal from "sweetalert2"

const ItemDetail = ({ producto }) => {
  const { addItem, cart } = useContext(CartContext)

  const handleAdd = (cantidad) => {
    addItem(producto, cantidad)
    Swal.fire({
      icon: "success",
      title: "¡Agregado!",
      text: `${producto.nombre} se sumó al carrito`,
      timer: 1500,
      showConfirmButton: false
    })
  }

  const yaEstaEnCarrito = cart.find((item) => item.id === producto.id)

  return (
    <div style={{ padding: "30px", display: "flex", gap: "30px", flexWrap: "wrap" }}>
      <img
        src={`/${producto.imagen}`}
        alt={producto.nombre}
        style={{ maxWidth: "350px", width: "100%", objectFit: "contain" }}
      />
      <div>
        <h2>{producto.nombre}</h2>
        <p>Precio: ${producto.precio.toLocaleString("es-AR")}</p>
        <p>Categoría: {producto.categoria}</p>
        <p>Stock disponible: {producto.stock}</p>

        {!yaEstaEnCarrito ? (
          <ItemCount stock={producto.stock} onAdd={handleAdd} />
        ) : (
          <p style={{ color: "green" }}>✅ Ya tenés este producto en el carrito</p>
        )}

        <div style={{ marginTop: "20px" }}>
          <Link to="/">Volver al catálogo</Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail