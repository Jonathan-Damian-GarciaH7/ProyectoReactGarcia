
import React from "react";
import logo from '../../assets/logo.png';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";



const NavBar = () => {


    return (
        <header>
             <nav style={styles.navfondoStyle}>
            
               <Link to='/'><img style={styles.imagen} src={logo} alt="" /> </Link> 
               
                    <NavLink style={styles.navStyle} to='/'>Inicio </NavLink>
                    <NavLink style={styles.navStyle} to='/tipo/oferta'>Ofertas</NavLink>
                    <NavLink style={styles.navStyle} to= '/categoria/Consultas'>Consultas</NavLink>
                    <NavLink style={styles.navStyle} to= '/cart'><CartWidget/> </NavLink>
             </nav>
        </header> 
    )
}
export default NavBar




const styles = {

    
 navfondoStyle:{
    backgroundColor:'black',
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
 },


   
  navStyle:{
    color: 'white',
        
    
    },
    
    Tittle:{
        fontSize: '180px',
        textAlign: 'center',
    
    },

    imagen:{
        width: '15%',
    },
 
    
}