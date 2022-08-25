import React from "react";
import { useCartContext } from "../../context/CartContext";
import './index.css';

const ItemCart = ({product}) => {
    const { removeProduct } = useCartContext();
    return(
        <div className='itemCart'>
            <img src={product.image} alt={product.description}/>
            <div>
                <p>Jean: {product.description} </p>
                <p>Cantidad: {product.quantity} </p>
                <p>Precio unitario: ${product.price} </p>
                <p>Subtotal: ${product.quantity * product.price} </p>
                <button className="bajar" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>

    )
}

export default ItemCart