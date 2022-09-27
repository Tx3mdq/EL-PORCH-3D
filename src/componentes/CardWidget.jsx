import React from 'react'
import logo from '../Imagenes/logo.png'



const CardWidget = () => {
    return (
        <>
          <div className='cont'>
          <img src={logo} alt='logo' width='60'className='card-widget m-4' />
          </div>  
        </>
      );
};

export default CardWidget