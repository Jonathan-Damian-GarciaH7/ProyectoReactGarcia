import ItemDetail from "../ItemDetail";
import React,{useEffect,useState} from "react";


const film = {id: 1, image:"https://static.dafiti.com.ar/p/wintertex-4984-680849-1-zoom.jpg", tittle: "Oferta Verano", price: "$5000"  }
export const ItemDetailContainer = () => {
   
    const [data, Setdata] =useState({})

    useEffect(()=> {

        const getData = new Promise(resolve =>{

            setTimeout(() => {
                resolve(film)
            }, 3000);

        })
        getData.then(res => Setdata(res))

    },[])

    return(

        <ItemDetail data= {data}/>

    )
}

export default ItemDetailContainer;