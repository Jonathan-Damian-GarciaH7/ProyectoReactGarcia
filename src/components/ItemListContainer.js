import React from "react"

const Datos = ({ numeroTelefono, comprarItem}) => {

    return (
        <>

           <p style={styles.navStyle}>Numero telefonico:{numeroTelefono}</p>

            <a style={styles.navStyle}>
           
            </a>

        </>
    )
}
export default Datos


const styles = {

    navStyle:{
        color: '#000',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        
    
    },


}
//< button onClick={comprarItem}>Comprar</button>