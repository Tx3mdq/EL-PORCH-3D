import '../App.css'
import ItemCounts from "./ItemCounts";
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContex';

const rutaInicial = '../img/';
export const ItemDetail = ({ product }) => {
    const [count , setCount] = useState(1);
    const click = () => {
  }
  const {addToCart} = useContext(CartContext);
  function onAdd (product) {        
      addToCart(product, count)
  }
return (
  <>
  <div key={product.id} className="producto card h-100 text-center p-4">
    <img src={rutaInicial + product.img} className="card-img-top" alt={product.title} height='350px' />
    <div className="card-body">
      <h5 className="card-title mb-0">{product.title} </h5>
      <h5 className="card-title mb-0">{product.category} </h5>
      <p className='card-description p-4'>{product.description}</p>
      <h5 className="card-price">${product.price}</h5>
      <ItemCounts stock = {product.stock} setCount = {setCount} count = {count} price = {product.price} />       
            <Link to={"/CartView"}><button className='btn btn-outline-dark m-2' onClick={click}>Go to Shopping</button> </Link>
            <button className='btn btn-outline-dark m-2'onClick={() => onAdd(product)}>Add To Cart</button>
            <Link to={"/Productos"}><button className='btn btn-outline-dark m-2' onClick={click}>Continuar Comprando</button> </Link>
    </div>
  </div>
  </> 
  );
};

export default ItemDetail;
