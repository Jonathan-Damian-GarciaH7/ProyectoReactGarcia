
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getData } from './mocks/fakeApi'
import {useParams} from 'react-router-dom';

const products  = [
    
  {id:'01', name:'Jean', categoria:"urban", description:"Verano", img:'https://static.dafiti.com.ar/p/wintertex-4984-680849-1-zoom.jpg', stock:3},
  {id:'02', name:'Jean', categoria:"urban", description:"Roturas", img:'https://static.dafiti.com.ar/p/vinson-2693-552849-1-zoom.jpg', stock:5},
  {id:'03', name:'Jean', categoria:"otros", description:"Oscuro", img:'https://static.dafiti.com.ar/p/vinson-6552-490765-1-zoom.jpg', stock:7},
  
]


//export const ItemListContainer = ???


export const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)
  const {ropaId} = useParams();

    const getProducts = async () => {
      try{
        const respuesta = await getData
        setProductList(respuesta)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    useEffect(()=>{
      const getData = new Promise ((resolve, reject) =>{
        //acciones
        let condition = true
        setTimeout(()=>{
          if(condition){
            resolve(products)
          }else{
            reject('salio mal :(')
          }
        },1000)
      });
      
      if(ropaId){
        getData.then(res => setProductList(res.filter(product => product.categoria === ropaId)) );
      }else{
        getData.then(res => setProductList(res) );
      }
      getProducts()
    },[ropaId])
  
  
  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
      
    </div>
  )
}

export default ItemListContainer