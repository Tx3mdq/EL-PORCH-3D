import { navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link, NavLink } from "react-router-dom"
import CardWidget from "../CardWidget"
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContex';

const NavBar = () => {
  const { cart } = useContext(CartContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3
      shadow-sm">
        <div className="container">
        <NavLink to={'/'}><CardWidget/></NavLink>
        <NavLink className="navbar-brand fw-bold fs-4" to={'/'}>EL PORCH 3D</NavLink>
          <button 
          className="navbar-toggler" type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" to={'/'}>
                Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to={'/Product'}>
                Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to={'/SobreNosotros'}>
                Sobre Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to={'/Contacto'}>
                Contacto
                </NavLink>
              </li>
            </ul>
          <div className="buttons">
              <a href="" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Login</a>
                <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Resgistrarse</a>
                <NavLink className="btn btn-outline-dark ms-2" to={'/CartView'}>
                <i className="fa fa-shopping-cart me-1"></i>Comprar ({cart.length})
                </NavLink>
          </div>
        </div>
        </div>
      </nav>
    </>
  )
}
export default NavBar