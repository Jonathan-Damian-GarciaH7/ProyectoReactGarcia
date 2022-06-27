
import React from "react";
import logo from '../../assets/logo.png';
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from '../ItemListContainer'


const NavBar = () => {

    const comprar = () => console.log ('seguir comprando')
    return (
        <header>
            <img style={styles.imagen} src={logo} alt="logo" />
            <h1 style={styles.Tittle}>Venta indumentaria.</h1>
            <nav style={styles.navStyle}>
                <a style={styles.navStyle}href="inicio">Inicio</a>
                <a style={styles.navStyle}href="ofertas">Ofertas</a>
                <a style={styles.navStyle}href="consultas">Consultas</a>
                <div style={styles.CartWidget}>
                <CartWidget/>
                </div>
            </nav>
             
            
           
        </header>
    )
}
export default NavBar




const styles = {

    header:{
        margin: '0',
     
    
    },
   
  navStyle:{
        color: '#000',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    
    },
    
    Tittle:{
        
        fontSize: '50',
        textAlign: 'center',
    
    },

    imagen:{

        width: '10%',
        

    },
 
    
}