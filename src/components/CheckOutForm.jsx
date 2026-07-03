import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../service/firebase"
import { CartContext } from "../context/CartContext"
import { Button, Form } from "react-bootstrap"
import Swal from "sweetalert2"

const CheckoutForm = () => {
  const { cart, totalPrecio, clear } = useContext(CartContext)

  const [buyer, setBuyer] = useState({ name: "", lastname: "", address: "", mail: "" })
  const [secondMail, setSecondMail] = useState("")
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }

  const terminarCompra = (e) => {
    e.preventDefault()

    if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.mail || !secondMail) {
      Swal.fire({
        icon: "warning",
        title: "Faltan datos",
        text: "Completá todos los campos antes de continuar"
      })
      return
    }

    if (buyer.mail !== secondMail) {
      Swal.fire({
        icon: "error",
        title: "Los correos no coinciden",
        text: "Revisá que ambos campos de email sean iguales"
      })
      return
    }

    setLoading(true)

    const orden = {
      comprador: buyer,
      carrito: cart,
      total: totalPrecio(),
      fecha: serverTimestamp()
    }

    const orderColl = collection(db, "orders")

    addDoc(orderColl, orden)
      .then((res) => {
        clear()
        setOrderId(res.id)
        Swal.fire({
          icon: "success",
          title: "¡Compra confirmada!",
          text: "Tu orden fue generada con éxito"
        })
      })
      .catch((error) => {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Ocurrió un error",
          text: "No pudimos procesar tu compra, intentá de nuevo"
        })
      })
      .finally(() => setLoading(false))
  }

  if (cart.length === 0 && !orderId) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>No hay productos para finalizar la compra</h2>
        <Link to="/">Ir al catálogo</Link>
      </div>
    )
  }

  return (
    <div style={{ padding: "30px" }}>
      {orderId ? (
        <div>
          <h1>¡Muchas gracias por tu compra!</h1>
          <h2>Tu orden es: {orderId}</h2>
          <Link to="/">
            <Button variant="dark">Volver al catálogo</Button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>Complete sus datos</h1>

          <Form onSubmit={terminarCompra} style={{ maxWidth: "400px" }}>
            <Form.Group className="mb-3">
              <Form.Control name="name" placeholder="Nombre" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="lastname" placeholder="Apellido" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="address" placeholder="Dirección" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="mail" type="email" placeholder="Email" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Repetí tu email"
                onChange={(e) => setSecondMail(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="dark" disabled={loading}>
              {loading ? "Procesando..." : "Terminar compra"}
            </Button>
          </Form>
        </div>
      )}
    </div>
  )
}

export default CheckoutForm