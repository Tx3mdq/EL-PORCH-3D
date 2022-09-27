import React from 'react'
import data from '../../MockData/MockData'
import { useState,useEffect } from 'react'
import  ItemList  from '../ItemList'

const ItemListContainer = () => {
const [product, setProduct] = useState([]);
    useEffect (() => {
    getProducts.then((response) => {
        setProduct(response);
    })
    .catch(err=>console.log(err))
},)
const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data);
        reject("Tenemos un Error")
    }, 2000);
});
return (
    <>
    <ItemList product={product}/>
    </>
)}
export default ItemListContainer