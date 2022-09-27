import { useState, createContext } from 'react';

export const CartContext = createContext()
export const CartProvider = ({ children }) => {

    // const [cantidad, setcantidad] = useState(0)
    const [cart, setCart] = useState([])

    const isInCart = item => cart.find(product => product.id === item.id)

    const addToCart = (item, cantidad) => {
        const newCart = [...cart]
        const itemFound = isInCart(item)
        if (itemFound) {
            newCart[newCart.findIndex(prod => prod.id === item.id)].cantidad++
            setCart(newCart)
            return
        }
        item.cantidad = cantidad
        newCart.push(item)
        setCart(newCart)
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((itemId) => itemId.id !== id)
        setCart(newCart)
    }

    const clearAll = (cart) => {
        cart = []
        setCart(cart)
    }

    const sumTotal = (cart) => {
        const totales = cart.reduce((total, product) =>
            total += (product.price * product.cantidad), 0
        ).toFixed(2)
        return totales
    }

    return (
        <CartContext.Provider value={{cart, setCart, addToCart,removeFromCart,clearAll,sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}