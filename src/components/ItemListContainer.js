
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getData } from './mocks/fakeApi'
import {useParams} from 'react-router-dom';
import {getFirestore, collection , getDocs} from 'firebase/firestore';



export const ItemListContainer = ({greeting}) => {
  //const [productList, setProductList]=useState([])
  //const [loading, setLoading]=useState(true)
  const {ropaId} = useParams();
  
  const[data,setData]= useState([]);
/*
    const getProduct = async () => {
      try{
        const respuesta = await getData
        setProductList(respuesta)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
  */  
    useEffect(()=>{
      const querydb =getFirestore();
      const queryCollection = collection(querydb, 'products');
      getDocs(queryCollection)
      .then(res=>  setData(res.docs.map(product=>({id: product.id, ...product.data()}) )))


    

     /* const getData = new Promise (resolve =>{ 
        setTimeout(()=> {
         
            resolve(products);
          }
        }, 1000);
      });
      
      if(ropaId){
        getData.then(res => setProductList(res.filter(product => product.categoria === ropaId)) );
      }else{
        getData.then(res => setProductList(res) );
      }
    */



    },[ropaId])
  
  
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList data={data}/>
      
    </div>
  );
}

export default ItemListContainer;