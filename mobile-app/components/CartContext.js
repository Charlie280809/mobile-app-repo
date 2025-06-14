import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(); 
export const CartProvider = ({ children }) => { 
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        console.log("addToCart called:", item);
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (indexToRemove) => { 
        setCartItems((prevItems) =>
            prevItems.filter((_, index) => index !== indexToRemove)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);