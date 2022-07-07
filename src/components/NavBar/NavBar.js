
import React from "react";
import logo from '../../assets/logo.png';
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from '../ItemListContainer'


const NavBar = () => {

    const comprar = () => console.log ('seguir comprando')
    return (
        <nav style={styles.navfondoStyle}>
            <div style={styles.divfondoStyle}>
                <img style={styles.imagen} src={logo} alt="logo" />
               <ul style={styles.navStyle}>
                    <li style={styles.navStyle}href="inicio">Inicio</li>
                    <li style={styles.navStyle}href="ofertas">Ofertas</li>
                    <li style={styles.navStyle}href="consultas">Consultas</li>
                </ul>
                
                <CartWidget/>
                
            </div>
        </nav>
             
    )
}
export default NavBar




const styles = {

    
 navfondoStyle:{
    display: 'flex',
    justifyContent:'center',
    alingItems:'center',
    backgroundColor:'black',
 },

 divfondoStyle:{
   
 },
   
  navStyle:{
        color: 'white',
        gap: '-6',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        cursor: 'pointer',
    
    },
    
    Tittle:{
        
        fontSize: '50',
        textAlign: 'center',
    
    },

    imagen:{

        width: '10%',
        

    },
 
    
}