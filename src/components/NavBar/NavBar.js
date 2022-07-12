
import React from "react";
import logo from '../../assets/logo.png';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";



const NavBar = () => {


    return (
        
        <nav style={styles.navfondoStyle}>
            
               <Link to='/'><img style={styles.imagen} src={logo} alt="" /> </Link> 
               
                    <NavLink style={styles.navStyle} to='/'>Inicio </NavLink>
                    <NavLink style={styles.navStyle} to='/categoria/otros'>Ofertas</NavLink>
                    <NavLink style={styles.navStyle} to= '/categoria/Consultas'>Consultas</NavLink>
                    <NavLink style={styles.navStyle} to="/CartWidget"><CartWidget/> </NavLink>
                 
           
        </nav>
             
    )
}
export default NavBar




const styles = {

    
 navfondoStyle:{
    display:'flex',
    backgroundColor:'black',
 },


   
  navStyle:{
        color: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display:'flex',
        backgroundColor:'black',
    
    },
    
    Tittle:{
        fontSize: '180px',
        textAlign: 'center',
    
    },

    imagen:{
        width: '15%',
    },
 
    
}