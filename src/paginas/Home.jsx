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
      <div className='lead'>
        <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio consequuntur, ducimus ipsam, 
    vel aliquid, maiores animi eos voluptatem nulla assumenda repudiandae reprehenderit ad rem. Reiciendis 
    necessitatibus optio, explicabo nisi vero repellendus similique labore numquam sequi quos molestiae commodi 
    praesentium consectetur exercitationem id doloremque inventore cupiditate sit magnam perferendis accusantium? 
    Qui necessitatibus, repellat vero maxime iusto molestias ea voluptatum, fuga non aut ab culpa obcaecati animi
    praesentium modi vel mollitia atque blanditiis corrupti dolores ut cum, minus nulla? Nulla odio vitae accusamus 
    totam exercitationem recusandae tempore animi laudantium, facere ipsa sunt velit ducimus, eos aliquam, nam vero! 
    Alias odio fugiat soluta, consectetur, iste eaque atque qui, quasi quos quo reprehenderit iusto voluptas rerum ad 
    id provident hic maxime at odit non doloremque ipsum sit minima mollitia! Adipisci sint fugit eos? Facere, velit ipsam. 
    Facere at accusantium veniam consequatur quaerat temporibus et ullam aperiam obcaecati repellendus, asperiores 
    magnam iure odit non!</p>
  </div>
  <div className='iframe'>
    <p>Como lo hacemos desde hace 10 años creando Productos personalizados para cumplir todos los requisitos de nuestros
      clientes.
    </p>
  </div>
  <div className='video'>
    <iframe width="860" height="515" src="https://www.youtube.com/embed/C4HAJ5HLuB4" title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  

      <ItemListContainer/>
    </div>
    
  )
}

export default Home