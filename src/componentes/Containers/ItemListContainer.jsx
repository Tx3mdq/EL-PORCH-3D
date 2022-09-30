// import data from '../../MockData/MockData'
import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom"
import  ItemList  from '../ItemList'
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"

const ItemListContainer = () => {
// const [product, setProduct] = useState([]);
//     useEffect (() => {
//     getProducts.then((response) => {
//         setProduct(response);
//     })
//     .catch(err=>console.log(err))
// },)
// const getProducts = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(data);
//         reject("Tenemos un Error")
//     }, 2000);
// });
const {categoryName} = useParams();
    console.log(categoryName);
    const [product, setProduct] = useState([]);
    useEffect (() => {

        getProducts();
    },[categoryName])


        const getProducts = () => {
            const db = getFirestore();
            const querySnapshot = collection(db, "product");
            if(categoryName){
                const queryFiltered = query(querySnapshot, where("category", "==",categoryName))
                getDocs(queryFiltered).then((response) => {
                    console.log(response.docs);
                    const data = response.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                    setProduct(data);
                })
            }else{
                getDocs(querySnapshot).then((response) => {
                    console.log(response.docs);
                    const data = response.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                    setProduct(data);
                })
            }
            
        }
return (
    <>
    <ItemList product={product}/>
    </>
)
}
export default ItemListContainer