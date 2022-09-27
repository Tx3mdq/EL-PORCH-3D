import data from '../MockData/MockData';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom"
import ListaProductos from '../componentes/ListaProductos';
import { NavLink } from "react-router-dom";
import '../App.css'


const Product = () => {
    const {categoryName} = useParams();
    const [productList, setProductList] = useState([]);
    useEffect (() => {
        if(categoryName){
            const response = data.filter((response) => response.category === categoryName)
            setProductList(response);
        }else{
            getProducts.then((response) => {
                setProductList(response);
            })
        }        
    },[categoryName])

    const getProducts = new Promise((resolve, reject) => { 
            setTimeout(() => {
                resolve(data);
            },);
            
        });
  return (
    <>
    <h1 className='display-6 m-4 fw-bolder text-center'>Nuestro Catalogo</h1>
        <hr />
        <div className='buttons d-flex justify-content-center mb-5 p-4'>
        <NavLink to={"/Productos"}><button className='btn btn-outline-dark me-2'>Todos los diseños</button></NavLink>
        <NavLink to={"/category/Originales"}><button className='btn btn-outline-dark me-2'>Diseños Originales</button></NavLink>
        <NavLink to={"/category/Populares"}><button className='btn btn-outline-dark me-2'>Diseños Popupalres</button></NavLink>
        <NavLink to={"/category/Origamis"}><button className='btn btn-outline-dark me-2'>Origamis</button></NavLink>
        <NavLink to={"/category/Personajes"}><button className='btn btn-outline-dark me-2'>Personajes</button></NavLink>
        </div>
    <ListaProductos product={productList}/>
    </>
)
}
 export default Product
