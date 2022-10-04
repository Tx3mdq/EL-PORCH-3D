import { CartContext } from '../../Context/CartContex';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Input } from '../Input';
import { getFirestore } from "firebase/firestore";


export const CartView = () => {
    

    const { cart, removeFromCart, clearAll, sumTotal } = useContext(CartContext)

    const [form, setForm] = useState({ name: '', surname: '', email: '', phone: '' })
    const [order, setOrder] = useState('')

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

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([name.trim(), email.trim(), phone.trim()].includes('')) {
            alert("Please complete all the fields")
        }
        else {
            handleFinish()
        }
    }

    const handleFinish = async () => {
        const db = getFirestore()
        const batch = db.batch()

        cart.forEach((item) => {
            const itemRef = db.collection("product").doc(item.id)
            batch.update(itemRef, { stock: item.stock - item.quantity })
        })
        batch.commit().then((r) => console.log(r))
        cartOrder()
    }

    // const items = cart.map(product => ({ id: product.id, name: product.name }))

    const cartOrder = () => {
        const db = getFirestore()
        const ordersCollection = db.collection('orders')
        const product = cart.map(product => ({ id: product.id, name: product.name }))

        const newOrder = {
            buyer: { name, phone, email },
            items: product,
            date: new Date()
        }

        ordersCollection.add(newOrder).then(({ id }) => {
            setOrder(order)
            // setOrder(id)
        })
        alert("Purchase finished succesfully")
    }

    const rutaInicial = '../img/';
    return (
    <div className="body">
                {cart.length === 0 ?
                    (<div className="cartIsEmpty">
                        <h2 className="cartIsEmpty">Your cart is empty!</h2>
                        <Link to="/Product"><button className='btn btn-outline-dark m-2'>Back to shopping</button></Link>
                    </div>
                    )
                    :
                    (
                        <div className="container">
                        <div className="form">
                            <h3>Your info: </h3>
                            {formField.map(({ id, label, type, value, icon }) => (
                                <div>
                                    <h4 className="label"><span>{icon}</span> {label}</h4>

                                    <Input className="input" onChange={handleForm}
                                        key={id} id={id} label={label}
                                        type={type} value={value}
                                    />
                                </div>
                            ))}
                            <button className="btn" type="submit"
                                onClick={(handleFinish, handleSubmit)}>Finish Purchase
                            </button>
                        </div>
                        <div >
                            <h3 className="order">Sus Productos Seleccionados:</h3>
                            {cart.map((i) =>
                            <div className="colum">
                                <div key={i.id} className="pre-order card h-100 text-center p-4">
                                    <img src={rutaInicial + i.img} className="card-img-top" alt={i.title} height="350px" width="180px" />
                                    <div className="card-body">
                                    <p className='lead fw-bold'>{i.title} <span> ({i.cantidad})</span></p>
                                    <h5>$ {i.price}</h5>
                                <button className='btn btn-outline-dark m-2' onClick={() => removeFromCart(i.id)}> Eliminar</button>
                                    </div>
                                </div>
                                </div>
                            )}
                            <hr />
                            <h4 className="total">Total Price: $ {sumTotal(cart)} </h4>
                            <div className='clear'>
                                <button className='btn btn-outline-dark m-2' onClick={() => clearAll(cart.length)}>Borrar Todo</button>
                                <button className='btn btn-outline-dark m-2' onClick={() => (cart.length)}>Proceder al pago</button>
                            </div>
                        </div>
                        </div>         
                    )
                }              
    </div >   

    )
}

export default CartView