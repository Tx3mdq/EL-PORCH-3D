import data from '../../MockData/MockData';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import '../../App.css'



const ItemDetailContainer = () => {

const {id} = useParams();
const [productDetail, setProductDetail] = useState([]);
    useEffect (() => {
        getItem.then((response) => {
            const dataFiltrada = response.filter((product) => product.id === id);
            setProductDetail(...dataFiltrada);
        })
    },)
const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        },);
    });
return (
    <>
        <div className="text-center p-4"> 
            <h1 className="m-4">DETALLE DEL PRODUCTO</h1>
            <div className="item3">
            <ItemDetail product = {productDetail} />
            </div>       
        </div>
    </>
)}
export default ItemDetailContainer