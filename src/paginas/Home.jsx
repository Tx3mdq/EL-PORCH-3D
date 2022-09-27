import React from 'react'
import fondo1 from '../Imagenes/fondo1.png'
import ItemListContainer from '../componentes/Containers/ItemListContainer'


const Home = () => {
  return (
    <div className='hero'>
      <div className="card bg-dark text-white border-0">
        <img src={fondo1} className="card-img" alt="background"
          height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className='container'>
            <h5 className="card-title display-3 fw-bolder mb-0">LO NUEVO</h5>
            <p className="card-text lead fs-2">Conoce las ultimas creaciones, con una fusion de <br></br>estilo propio y
              las viejas conocidas.</p>
          </div>
        </div>
      </div>
      <ItemListContainer/>
    </div>
  )
}

export default Home