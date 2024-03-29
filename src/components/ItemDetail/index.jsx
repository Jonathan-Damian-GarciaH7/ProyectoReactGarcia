import React from "react";
import {Link} from 'react-router-dom';
import { useState } from 'react';
import ItemCount from '../../Itemcount/ItemCount'
import { useCartContext } from '../../context/CartContext'
import './itemDetail.css';


export const ItemDetail = ({data}) =>{

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
        
    }

    return(
        <div className="container">
        <div className="detail">
            <img className='detail__image' src={data.image} alt=""/>
        <div className="content">
            <h1>{data.description}</h1>
            <h2>{data.name}</h2>
            <h3>Precio ${data.price}</h3>
        </div>
        </div>
        {   
            goToCart
                ? <div className='centrar'><Link to = '/cart'><button>Terminar Compra</button></Link></div>
                : <ItemCount onAdd={onAdd} />
        }

        </div>
    
    );
}

export default ItemDetail;
