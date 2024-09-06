import { Children, createContext, useState } from "react";

export const CartContext = createContext();

export const CartServiceContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItems = (product, quantity) => {
        if (viewCart(product.id)) {
            setCart(
                cart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity } : item
                )

            );
        } else {
            setCart([...cart, { product, quantity }]);
        }
    };

    const viewCart = (productId) => {
        return cart.some((item) => item.product.id === productId);
    };


    const removeItem = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId));
    };

    const clearCart = () => {
        setCart([]); 
    };


    const getTotal = () => {
        return cart.reduce((total, item) => total + item.product.precio * item.quantity, 0);
    };


    const totalProducts = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };


    return (
        <CartContext.Provider value={{
            cart,
            addItems,
            viewCart,
            clearCart,
            getTotal,
            totalProducts,
            removeItem,
        }}> {children} </CartContext.Provider>
    )
}

export default CartServiceContext;