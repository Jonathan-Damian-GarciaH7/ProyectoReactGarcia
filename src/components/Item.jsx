import React from 'react'
import './Item.css';
import {Link} from 'react-router-dom';


const Item = ({product}) => {
  const {image, title, price}= product

  return (
     <section className='ordenarTodo'>
     <div className="card" style={{width:'20rem', margin:'.5rem'}}>
     <img src={image}className="card-img-top" alt={title}/>
     <div className="card-body">
         <p className="card-text">{title}</p>
         <p className="card-text">{price}</p>
     </div>

    <Link to = { `detalle/${product.id}`} className = "product">
    <button className='btn btn-primary'>Ver detalle</button>
    </Link>
    </div>
    </section>

  )
}

export default Item