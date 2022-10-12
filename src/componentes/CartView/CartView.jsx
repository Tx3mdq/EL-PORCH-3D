import { CartContext } from '../../Context/CartContex';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Input } from '../Input';
import { getFirestore, collection, addDoc, doc, updateDoc } from "firebase/firestore";
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import itemCounts, { ItemCounts } from '../ItemCounts';

export const CartView = () => {
const {cart, removeFromCart, clearAll, sumTotal, cartItems } = useContext(CartContext)
const navigate = useNavigate();
const db= getFirestore();

    const createOrder= () => {
        const order= {
    buyer: {
        name: name,
        phone: phone,
        email: email
    },
    items: cart,
    total: sumTotal(cart),
    date:moment().format("DD/MM/YYYY, h:mm:ss a")
}

//const db = getFirestore();
//const createOrder = () =>{
    const query = collection(db, 'orders');
    addDoc(query, order)
    .then(({id}) => {
        console.log(id);
        updateStockProducts();
        alert('La compra fue realizada');
    })
    .catch(() => 
        alert('Ocurrio un error, vuelve a intentar')
    );
};  
const updateStockProducts = () => {
    cart.forEach(producto => {
        const queryUpdate = doc(db, 'product', producto.id);
        updateDoc(queryUpdate, {
            categoryId: producto.categoryId,
            description: producto.description,
            img: producto.img,
            price: producto.price,
            title: producto.title,
            stock: producto.stock - producto.cantidad,
        }) 
        .then(() => {
            if(cart[cart.length -1].id === producto.id){
                clearAll();
                navigate ('/');
            }         
        })
        .catch (() => {
            console.log('error al actualizar');
        });
    })
};

    const [form, setForm] = useState({ name: '', email: '', phone: '' })
    //const [order, setOrder] = useState('')

    const { name, email, phone } = form
    const formField = [
        {
            id: "name",
            label: "Name",
            value: form.name,
            type: "text",
            icon: <FaUser />
        },
        {
            id: "email",
            label: "Email",
            value: form.email,
            type: "text",
            icon: <FaEnvelope />
        },
        {
            id: "phone",
            label: "Phone",
            value: form.phone,
            type: "text",
            icon: <FaPhoneAlt />
        }
    ]

    const handleForm = (id, value) => {
    const newForm = { ...form, [id]: value }
    setForm(newForm)
    }  
    const rutaInicial = '../img/';
    return (
    <div className="body">
                {cart.length === 0 ?
                    (<div className="cartIsEmpty">
                        <h2 className="cartIsEmpty">El Carrito esta Vacio, Seleccione algun Producto!</h2>
                        <Link to="/Product"><button className='btn btn-outline-dark m-2'>Volver a la Tienda de Productos</button></Link>
                    </div>
                    )
                    :
                    (
        <div className="containerF">
        <div >
            <h3 className="order">Sus Productos Seleccionados:</h3>
            {cart.map((i, item) =>
            <div className="colum">
                <div key={i.id} className="pre-order card h-100 text-center p-4">
                    <img src={rutaInicial + i.img} className="card-img-top" alt={i.title} height="350px" width="180px" />
                    <div className="card-body">
                    <p className='lead fw-bold'>{i.title} <span> ({i.cantidad})</span></p>
                    <h5>$ {i.price}</h5>
                    <ItemCounts />
                <button className='btn btn-outline-dark m-2' onClick={() => removeFromCart(i.id)}> Eliminar</button>
                    </div>
                </div>
                </div>
            )}
        </div>
        <div className="form">
            <h3 className='ubicacion'>Datos de Contacto: </h3>
            {formField.map(({ id, label, type, value, icon }) => (
                <div className='ubicacion'>
                    <h4 className="label"><span>{icon}</span> {label}</h4>

                    <Input className="input" onChange={handleForm}
                        key={id} id={id} label={label}
                        type={type} value={value}
                    />
                </div>
            ))}
            <div className='clear'>
            <button className='btn btn-outline-dark' type="submit"
                onClick={(createOrder)}>Finalizar Compra
            </button>
            <button className='btn btn-outline-dark' onClick={() => clearAll(cart.length)}>Borrar Todo</button>
            </div>
        </div>
        <div className="totalD">
            <h4>TOTAL: ${sumTotal(cart)} </h4>
            </div>
        </div>         
    )
}              
</div >   
    )
}

export default CartView