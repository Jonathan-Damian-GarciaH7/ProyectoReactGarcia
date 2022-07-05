import React from "react";
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer.js'




const App= ()  => {


 const onAdd = (mensaje) => {
 console.log(mensaje)} // paso por medio de props la func onAdd hacia ItemCount
 


  return (
    <>
    <NavBar/>
    <ItemListContainer numeroTelefono= '11223344' />
    

    </>
  );
 
}


export default App;





 //<ItemCount stock={contador} aviso={aviso} />


 //