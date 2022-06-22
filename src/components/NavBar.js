import React from "react"
import logo from '../components/logo.png'


const NavBar = () => {

    return (
        <>
            <img style={styles.imagen} src={logo} alt="" />
            <h1 style={styles.Tittle}>Venta indumentaria</h1>
            <nav style={styles.navStyle}>
                <a style={styles.navStyle}href="inicio">Inicio</a>
                <a style={styles.navStyle}href="ofertas">Ofertas</a>
                <a style={styles.navStyle}href="consultas">Consultas</a>
            </nav>
            
        </>
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