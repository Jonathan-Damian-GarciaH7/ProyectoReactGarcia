import React, {useContext} from 'react'
import {ItemCount} from '../Itemcount/ItemCount'
import { CartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'



const Item = ({product}) => {
  const nombre = useContext(CartContext);
  console.log(' Item', nombre);


  console.log(product)
  const {img, name, description}= product
  const onAdd = (mensaje) => {
  console.log(mensaje)}
  return (
    <div className="card" style={{width:'5rem', margin:'.5rem'}}>
    <img className="imgjean" src={img} alt={name}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
    </div>
     <ItemCount stock={10} onAdd={onAdd}/> 

    <Link to = { `detalle/${product.id}`} className = "product">
    {/* <img src={product.img} alt = ""/>
    <p>{product.description}</p> */}

    <button className='btn btn-primary'>Ver detalle</button>

    </Link>
    </div>
  )
}

export default Item