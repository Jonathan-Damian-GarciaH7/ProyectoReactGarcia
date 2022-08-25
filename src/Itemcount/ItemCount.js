//import { AvTimerSharp, VolunteerActivismOutlined } from "@mui/icons-material";
import React, {useState} from "react";
import './ItemCount.css';
import '../components/Item'


export const ItemCount = ({stock,onAdd,initial=0}) => {

   const[contador, setContador] = useState(initial); //funcion corta estructuring

    const handlerClick =() =>{   //evento boton , se trabaja sobre la variable directamente, ya que al ser una constante en general solo se puede trabajar sobre el set en ese estado. por ende no se modifica los estados en react.prohibido modificar o pisar un estado
        setContador(contador+1);
        if(contador < stock){

            setContador(contador + 1)
    
        }
        if(contador >= stock){
    
           alert("No hay stock")
        }

    }

    const decrease = () => {
        if(contador>0){
            setContador(contador-1)
        }
    }


    return( //en las funciones handerclick y decrease no se agregan los parentesis ya que al ejecutar , inicia diractamente la accion , en cambio asi como esta la llama y se inicia solo cuando se haga clic.
        <>
            <div class="titulojean">Cantidad de Jeans</div>
            <div class="contador">{contador}</div>
            <div class="centradobutton">
            <button onClick={handlerClick}>+</button> 
            <button onClick={decrease}>-</button> 
            <button onClick={() =>{onAdd(contador);}}>Agregar al Carrito</button> 
            </div>
        
        </>
    )
}
export default ItemCount

