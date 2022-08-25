import React from "react";
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from '../src/components/Cart/Cart';
import CartProvider from "./context/CartContext";





const App= ()  => {


  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/tipo/:articuloId' element = {<ItemListContainer/>}/>
            <Route path='/tipo/:articuloId/detalle/:detalleId' element = {<ItemDetailContainer/>}/>
            <Route path='/detalle/:detalleId' element = {<ItemDetailContainer/>}/>  
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </CartProvider>
    </BrowserRouter>

    </>
  );
 
}

export default App;
