import React from 'react'
import { Link } from "react-router-dom";
import Item from './Item'
import '../App.css'



const ListaProductos = ({product}) => {
    
  return (
    <>
    {/* <h1 className='display-6 m-4 fw-bolder text-center'>Nuestro Catalogo</h1>
        <hr />
        <div className='buttons d-flex justify-content-center mb-5 p-4'>
          <button className='btn btn-outline-dark me-2'>Todos los Diseños</button>
          <button className='btn btn-outline-dark me-2'>Diseños Originales</button>
          <button className='btn btn-outline-dark me-2'>Diseño Populares</button>
          <button className='btn btn-outline-dark me-2'>Origamis</button>
          <button className='btn btn-outline-dark me-2'>Personajes</button>
        </div> */}
        
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
export default ListaProductos