//import data from '../../MockData/MockData';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import '../../App.css'
import { getFirestore, doc, getDoc } from "firebase/firestore";



const ItemDetailContainer = () => {

    const {id} = useParams();  
    const [productDetail, setProductDetail] = useState([]);

    useEffect (() => {
        getItem();

    },)

    const getItem = () => {
        const db = getFirestore();
        const queryDoc = doc(db, "product", id);
        getDoc(queryDoc).then((res) =>{
            setProductDetail({id: res.id, ...res.data()});
        }).catch((err) => console.log(err));
    }
return (
    <>
        <div className="text-center p-4"> 
            <h1 className="detailProduct">DETALLE DEL PRODUCTO</h1>
            <div className="item3">
            <ItemDetail product = {productDetail} />
            </div>       
        </div>
    </>
)}
export default ItemDetailContainer