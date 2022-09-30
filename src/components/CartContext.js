import { createContext, useContext, useState } from 'react';

const context = createContext();

export const CartContext = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);

  const removeItem = (itemId) => {
    const products = productsCart.filter((p) => p.id !== itemId);

    setProductsCart(products)
  }

  const clear = () => {
    setProductsCart([])
  }

  const isInCart = (id) => {
    const product = productsCart.find((p) => p.id === id)

    return !!product
  }

  const addItem = (item, quantity) => {
    const product = isInCart(item.id);

    if (product) {
      const products = productsCart.map((p) => {
        if (p.id === item.id) {
          return {...p, quantity: p.quantity + quantity}
        } else {
          return {...p}
        }
      })

      setProductsCart(products)
    } else {
      setProductsCart({ ...item, quantity })
    }
  }

  return <context.Provider value={{ addItem, removeItem, clear, isInCart, productsCart }}>
    {children}
   </context.Provider>
}

export const useCart = () => useContext(CartContext);
