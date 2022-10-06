import '../App.css'
import ItemCounts from "./ItemCounts";
import { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContex';
import ClockLoader from "react-spinners/ClockLoader";


const rutaInicial = '../img/';

export const ItemDetail = ({ product }) => {
const { addToCart } = useContext(CartContext)
const [showButton, setShowButton] = useState(true)
const [count , setCount] = useState(1);
    
const stock = product.stock
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const onAdd = (count) => {
    addToCart(product, count)
    setCount(count)
    setShowButton(false)
}
const add = () => {
    if (count < stock) {
        setCount(count + 1)
    }
    else {
        alert("Perdon, por el momento el no hay mas stock!!!")
    }
}
const substract = () => {
    if (count > 1) {
        setCount(count - 1)
    }
}
const [loading, setLoading] = useState(false);

useEffect (() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    }, 2000)
}, [])
return (
    <>
    {
    loading ? ( <div className='clock'><ClockLoader color="black" size={100} speedMultiplier={1} loading={loading}/></div>) 
    :
( <div className="productWrapper">
    <div className="productCard">
        <div className="productDescription">
        <img src={rutaInicial + product.img} className="productPhoto" alt={product.title}  />
        </div>
        <div className="purchaseSection">
            <h5 className="productName">{product.title} </h5>
            <h5 className="productPrice">${product.price}</h5>
            <p className='productPrice'>{product.description}</p>
            {product.stock === 0 ? (<p>Sin stock</p>) :
                    (<p>disponibles</p>) &&
                        showButton ?
                        (<div className="counter">
                            <ItemCounts
                                count={count}
                                add={add}
                                substract={substract}
                                stock={product.stock}
                                price = {product.price}
                            />
                            <button className='btn btn-outline-dark' onClick={() => onAdd(count)}>Add to cart</button>
                        </div>
                        )
                        :
                        (
                <div>
                <Link to='/CartView'>
                <button className='btn btn-outline-dark'>
                Proceder al Pago
                </button>
                </Link>
                <Link to={"/Product"}>
                <button className='btn btn-outline-dark m-2' >  
                Continuar Comprando  
                </button>
                </Link> 
            </div>
            )}
            </div>
        </div>
    </div>
    
    )}
</> 
);
};

export default ItemDetail;
