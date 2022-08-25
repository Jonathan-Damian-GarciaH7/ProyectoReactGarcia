import ItemDetail from "../ItemDetail";
import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import { ToastContainer,toast } from "react-toastify"
import { SpinnerDotted } from 'spinners-react';


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { detalleId } = useParams();

    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products' ,detalleId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
        .catch((error) => {
            toast.error("Error al cargar productos");
          })
        .finally(() => setLoading(false))

    }, [detalleId]);

    return (
        <div>
        {loading ? <SpinnerDotted  style={styles.center} size={64} thickness={180} speed={80} color="rgba(0, 0, 0, 1)" />: <ItemDetail data={data} /> }
        <ToastContainer/>
        </div>
    );
};

export default ItemDetailContainer;

const styles = {
   
    center:{
        display: 'block',
        margin: 'auto'
    },
  
    
}