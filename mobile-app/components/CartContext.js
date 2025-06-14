import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(); // context die de staat van de winkelwagen bijhoudt
export const CartProvider = ({ children }) => { // wrapper component (rond de app of deel van)
    const [cartItems, setCartItems] = useState([]); // Houdt de lijst van items in de winkelwagen bij

    const addToCart = (item) => {
        console.log("addToCart called:", item);
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (indexToRemove) => { // Verwijdert een item uit de winkelwagen op basis van zijn index
        setCartItems((prevItems) =>
            prevItems.filter((_, index) => index !== indexToRemove)
        );
    };

    return ( // beschikbaar stellen aan onderliggende componenten
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext); // custom hook om direct toegang te krijgen tot de cart-context: const { cartItems, addToCart, removeFromCart } = useCart();