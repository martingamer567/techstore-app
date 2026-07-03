import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
import ItemList from "./ItemList"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoria } = useParams()

  useEffect(() => {
    setLoading(true)

    const productosRef = categoria
      ? query(collection(db, "productos"), where("categoria", "==", categoria))
      : collection(db, "productos")

    getDocs(productosRef)
      .then((res) => {
        const lista = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setProductos(lista)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoria])

  return (
    <div>
      {loading ? <p>Cargando productos...</p> : <ItemList productos={productos} />}
    </div>
  )
}

export default ItemListContainer