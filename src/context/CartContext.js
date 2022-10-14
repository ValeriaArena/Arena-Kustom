import { createContext, useState } from "react";

export const CartContext = createContext ()

const CartProvider = (props) => {
    const [cart, setCart] = useState ([])
    const addToCart = (props, cantidad) => {
        setCart ([...cart,{...props, cantidad}])
    };
    

return (
    <div>
        <CartContext.Provider value={{cart, addToCart}}>
            {props.children}
        </CartContext.Provider>
    </div>
)}

export default CartProvider