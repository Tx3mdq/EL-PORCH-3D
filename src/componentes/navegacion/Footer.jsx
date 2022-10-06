import React from "react";
import "../../App.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h3>EL PORCH 3D</h3>
            <ul className="list-unstyled">
              <li>223-6208899</li>
              <li>Mar del Plata</li>
              <li>Av de Los trabajadores</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>| Formas de Pagos</h4>
            <ul className="list-unstyled">
              <li>Efectivo</li>
              <li>Tarjeta de Regalo</li>
              <li>Mercado Pago</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>| Redes Sociales</h4>
            <ul className="IconosFoot">
              <li className="IconosFoot1">
                <a href="https://www.facebook.com/" target="_BLANK"
                ><i className="fa fa-facebook fa-2x"></i></a>
              </li>
              <li className="IconosFoot1">
                <a href="https://www.twitter.com" target="_BLANK"
                ><i className="fa fa-twitter fa-2x"></i></a>
              </li>
              <li className="IconosFoot1">
                <a href="https://ar.linkedin.com/" target="_BLANK"
                ><i class="fa fa-linkedin fa-2x"></i></a>
              </li>
              <li className="IconosFoot1">
              <a href="https://ar.pinterest.com/" target="_BLANK"
                ><i className="fa fa-pinterest fa-2x"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
             Gaston Almeyda®  <a href="https://www.linkedin.com/in/gaston-almeyda-20372b125" target="_BLANK">
              <i className="fa fa-linkedin"></i></a>  | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;