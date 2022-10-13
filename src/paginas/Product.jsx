import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom"
import ListaProductos from '../componentes/ListaProductos';
import { NavLink } from "react-router-dom";
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"
import '../App.css'
import ClockLoader from "react-spinners/ClockLoader";


const Product = () => {
    const {categoryName} = useParams();
    console.log(categoryName);
    const [productList, setProductList] = useState([]);
    useEffect (() => {

        getProducts();
    },[categoryName])
        const getProducts = () => {
            const db = getFirestore();
            const querySnapshot = collection(db, "product");
            if(categoryName){
                const queryFiltered = query(querySnapshot, where("categoryId", "==",categoryName))
                getDocs(queryFiltered).then((response) => {
                    console.log(response.docs);
                    const data = response.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                    setProductList(data);
                })
            }else{
                getDocs(querySnapshot).then((response) => {
                    console.log(response.docs);
                    const data = response.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                    setProductList(data);
                })
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
(  <div>
        <h1 className='display-6 m-4 fw-bolder text-center'>Nuestro Catalogo</h1>
        <hr />
        <div className='buttons d-flex justify-content-center mb-5 p-4'>
        <NavLink to={"/Product"}><button className='btn btn-outline-dark me-2'>Todos los diseños</button></NavLink>
        <NavLink to={"/categoryId/lapiceros"}><button className='btn btn-outline-dark me-2'>Lapiceros</button></NavLink>
        <NavLink to={"/categoryId/plantas"}><button className='btn btn-outline-dark me-2'>Plantas</button></NavLink>
        <NavLink to={"/categoryId/llaveros"}><button className='btn btn-outline-dark me-2'>Llaveros</button></NavLink>
        <NavLink to={"/categoryId/personajes"}><button className='btn btn-outline-dark me-2'>Personajes</button></NavLink>
        </div>
    <ListaProductos product={productList}/>
    </div>
    )}
    </>
    );
};
export default Product