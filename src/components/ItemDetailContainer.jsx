import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../service/firebase"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [invalido, setInvalido] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const docRef = doc(db, "productos", id)

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProducto({ id: res.id, ...res.data() })
        } else {
          setInvalido(true)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p style={{ padding: "20px" }}>Cargando producto...</p>
  if (invalido) return <p style={{ padding: "20px" }}>Producto no encontrado.</p>

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer