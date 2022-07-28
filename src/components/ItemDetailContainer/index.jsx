import ItemDetail from "../ItemDetail";
import React,{useEffect,useState} from "react";
import { getData } from '../mocks/fakeApi';
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
/*
const products =  [
{id: 1, image:"https://static.dafiti.com.ar/p/levis-1631-767519-3-zoom.jpg", tittle: "Oferta Verano", price: "$5000"  },
{id: 2, image:"https://static.dafiti.com.ar/p/levis-1621-767519-1-zoom.jpg", tittle: "Oferta Verano", price: "$5000"  },
{id: 3, image:"https://static.dafiti.com.ar/p/levis-1626-767519-2-zoom.jpg", tittle: "Oferta Verano", price: "$5000"  }, 

];
*/


export const ItemDetailContainer = () => {
   
    const [data, Setdata] =useState({})
    const {detalleId} = useParams()

    
    useEffect(()=>{
     /*  const getData = new Promise (resolve =>{
          //acciones
        
          setTimeout(()=>{
           
              resolve(product)
           
          },1000);

        })
        */
       

        getData.then(res => Setdata(res)) 


        const querydb =getFirestore();
        const queryDoc =doc(querydb, 'products', 'l0n4T0w2pKNEMOqoHKZQ');
        getDoc(queryDoc)
        .then(res => Setdata({id: res.id, ...res.data()}))
      
      
        
    }, [])

    return(

          
       <ItemDetail data={data} />
         
    );
}

export default ItemDetailContainer;