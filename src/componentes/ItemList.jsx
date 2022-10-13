import React from 'react'
import { Link } from "react-router-dom";
import Item from './Item'
import '../App.css'



const ItemList = ({product}) => {
    
  return (
  <>
        <h1 className='UC display-6 fw-bolder text-center'>Ultimas Creaciones</h1>
  <div className='item'>
        {product.map((item)=>(       
        <Link key={item.id} to={'/detail/'+item.id} >
        <Item  
          img={item.img} 
          title={item.title} 
          category={item.category} 
          description={item.description} 
          price={item.price}  />
        </Link>  
))}
  </div>
  </>
  );
};

export default ItemList