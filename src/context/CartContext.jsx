import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, cantidad) => {
    const yaEstaEnCarrito = cart.find((prod) => prod.id === item.id)

    if (yaEstaEnCarrito) {
      setCart(cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod
      ))
    } else {
      setCart([...cart, { ...item, cantidad }])
    }
  }

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id))
  }

  const clear = () => {
    setCart([])
  }

  const totalUnidades = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const totalPrecio = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalUnidades, totalPrecio }}>
      {children}
    </CartContext.Provider>
  )
}