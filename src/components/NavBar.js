import React from "react";
import logo from '../components/logo.png';
//import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ItemListContainer from './ItemListContainer'

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
            </nav>
             
            <ItemListContainer numeroTelefono= '11223344' comprarItem={comprar}/>


        </header>
        



    )
}
export default NavBar


const styles = {
   
    navStyle:{
        color: '#000',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
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