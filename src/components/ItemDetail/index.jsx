import React from "react";
import {Link} from 'react-router-dom';
import { useState } from 'react';
import ItemCount from '../../Itemcount/ItemCount'
import { useCartContext } from '../../context/CartContext'


export const ItemDetail = ({data}) => {


    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
    }
    


    return(
        

        <div className="container">
            <div style={styles.detail}>
                <img  style={styles.detailImage} src={data.img} alt="" />
                <div className='content'>
                    <h1 style={styles.detail}>{data.tittle}</h1>
                    
                    <h2>{data.price}</h2>
                    <h2>{data.description}</h2>
                </div>
            </div>
       
         
         {   
             goToCart
                 ? <Link to = '/cart'>Terminar Compra</Link>
                 : <ItemCount stock={10} onAdd={onAdd} />
 
         }
 
 
         </div>

    );
}

export default ItemDetail;


const styles={

detail:{
    fontSize:'25px',
    display: 'flex',
    justifyContent:'center',
    alingItems:'center',
},

detailImage:{
    width: '300px',
    height:'450px',

},

};


