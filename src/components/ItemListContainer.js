import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList'
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore';
import {useParams} from 'react-router-dom';
import { ToastContainer,toast } from "react-toastify"
import { SpinnerDotted } from 'spinners-react';


export const ItemListContainer = ({greeting}) => {

  const [data, setData]=useState([])
  const [loading, setLoading] = useState(true)
  const {articuloId} = useParams();

  /////////////////////////////partidoId x articuloId
    useEffect(()=>{
      
      const querydb = getFirestore();
      const queryCollection = collection(querydb,'products');
  
       if(articuloId){
        const queryFilter = query(queryCollection, where('tipo', '==',articuloId))
        getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        .catch((error) => {
					toast.error("Error al cargar productos");
				  })
				.finally(() => setLoading(false))
       }
        else{
          getDocs(queryCollection)
          .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        
				.catch((error) => {
					toast.error("Error al cargar productos");
				})
				.finally(() => {
					setLoading(false)
				})
       }
    },[articuloId])
  
  return (
    <div>
      <h1>{greeting}</h1>
       {loading ? <SpinnerDotted style={styles.center} size={64} thickness={180} speed={80} color="rgba(0, 0, 0, 1)" />: <ItemList data={data}/> }
      <ToastContainer/>
    </div>
  )
}

export default ItemListContainer

const styles = {
   
  center:{
      display: 'block',
      margin: 'auto'
  
  },

  
}