import React from "react";
import './itemDetail.css'

export const ItemDetail = ({data}) => {
    return(
        

        <div className="container">
            <div className='detail'>
                <img className='detail__image' src={data.image} alt="" />
                <div className='content'>
                    <h1 style={styles.detail}>{data.tittle}</h1>
                    
                    <h2>{data.price}</h2>
                </div>
            </div>
        </div>

    );
}

export default ItemDetail;


const styles={

detail:{
    fontSize:'40px',
    display: 'flex',
    justifyContent:'center',
    alingItems:'center',
},

};


