import React from "react";
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from '../src/components/Cart/Cart';





const App= ()  => {



 


  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/categoria/:ropaId' element = {<ItemListContainer/>}/>
      <Route path='/categoria/:otros' element = {<ItemListContainer/>}/>
      <Route path='/detalle/:detalleId' element = {<ItemDetailContainer/>}/>  
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
   

    </>
  );
 
}


export default App;





 //<ItemCount stock={contador} aviso={aviso} />


 //