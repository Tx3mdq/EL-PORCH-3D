import React from 'react';
import '../App.css'



const rutaInicial = '../img/';
export const Item = ({title, img, description, price, id}) => {
  
  return (
<>
<div key={id} className="producto card h-100 text-center p-4">
    <img src={rutaInicial + img} className="card-img-top" alt={title} height='350px' />
    <div className="card-body">
      <h5 className="card-title mb-0">{title} </h5>
      <p className='card-description p-4'>{description}</p>
      <h5 className="card-price">${price}</h5>
    </div>
  </div>
</>
  )
}

export default Item

