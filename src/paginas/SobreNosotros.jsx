import React from "react";

const SobreNosotros = () => {
  return (
    <div>
      <div className="lead">
        <h2 className='display-6 fw-bolder text-center'> QUIENES SOMOS</h2>
        <p>
          El Porch es un emprendimiento dedicado a la elaboración de productos
          en 3D de diseño. Nuestro ideario es desarrollar proyectos decorativos
          y funcionales para el uso habitual que embellezcan la vida diaria. No
          basamos en aportar creatividad a la impresión 3D generando productos
          únicos e irrepetibles, como cada uno de nosotros. Toda nuestra
          producción se basa en principios de sustentabilidad generando el menor
          impacto posible en el entorno, consumiendo insumos locales y
          utilizando materiales de calidad con ecoetiquetas que certifiquen su
          origen reciclado. Todo el plástico que utiliza El Porch es de
          reutilización y calidad de acabado. Con El Porch aspiramos a que
          decores tu vida con lo que a vos te gusta he identifica, lo que te
          haga distinto y único, para que se vea en vos lo especial que eres.
        </p>
      </div>
      <div className="iframe">
        <p>
          Como lo hacemos desde hace 10 años creando Productos personalizados
          para cumplir todos los requisitos de nuestros clientes.
        </p>
      </div>
      <div className="video">
        <iframe
          width="860"
          height="515"
          src="https://www.youtube.com/embed/C4HAJ5HLuB4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    
  );
};

export default SobreNosotros;
