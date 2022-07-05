import React from "react";
import Cart from "../../assets/carrito.png"

const CartWidget = () => {

    return (
       
           < img src={Cart} style={styles.Cart} alt="shopping cart" />
        
    )
}

export default CartWidget

const styles = {

    Cart:{

        width: '5%',
        display:'flex'


    },


}