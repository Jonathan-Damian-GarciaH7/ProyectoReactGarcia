import React from "react";
//import Cart from "../../assets/carrito.png"
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <>
          <i className="bi bi-cart3"></i>
          
           <span>{totalProducts() || ''}</span>
        </>
    )
}

export default CartWidget;