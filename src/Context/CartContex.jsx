import { useState, createContext } from 'react';

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('En Carrito');
        } else {
            setCart([...cart, { ...item, cantidad}])
        }
    };
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };
    
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