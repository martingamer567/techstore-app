import Item from "./Item"

const ItemList = ({ productos }) => {
  if (productos.length === 0) {
    return <p>No hay productos en esta categoría.</p>
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  )
}

export default ItemList