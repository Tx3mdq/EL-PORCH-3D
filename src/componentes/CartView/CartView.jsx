import { CartContext } from '../../Context/CartContex';
import { useContext } from 'react'
import { Link } from 'react-router-dom';


export const CartView = () => {

    const { cart, removeFromCart, clearAll, sumTotal } = useContext(CartContext)

    const rutaInicial = '../img/';
    return (

        <>
            <div className="body">
                {cart.length === 0 ?
                    (<div className="cartIsEmpty">
                        <h2 className="cartIsEmpty">Your cart is empty!</h2>
                        <Link to="/Product"><button className='btn btn-outline-dark m-2'>Back to shopping</button></Link>
                    </div>
                    )
                    :
                    (
                        <div className="colum">
                            <h3 className="order">Sus Productos Seleccionados:</h3>
                            {cart.map((i) =>
                                <div key={i.id} className="col-md-4 p-4">
                                    <img src={rutaInicial + i.img} className="card-img-top" alt={i.title} height="350px" width="180px" />
                                    <p className='lead fw-bold'>{i.title} <span> ({i.cantidad})</span></p>
                                    <h5>$ {i.price}</h5>
                                    <button className='btn btn-outline-dark m-2' onClick={() => removeFromCart(i.id)}> Eliminar

                                    </button>
                                </div>
                            )}
                            <hr />
                            <h4 className="total">Total Price: $ {sumTotal(cart)} </h4>
                            <div className='clear'>
                                <button className='btn btn-outline-dark m-2' onClick={() => clearAll(cart.length)}>Borrar Todo</button>
                                <button className='btn btn-outline-dark m-2' onClick={() => (cart.length)}>Proceder al pago</button>
                            </div>
                        </div>

                    )
                }
            </div >

        </>

    )
}

export default CartView