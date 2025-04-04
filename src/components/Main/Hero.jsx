import React from 'react'
import MyImage from '../../imagenes/imagen-hero-ecommerce.jpg'

const Hero = () => {

    return (
      
      <div className="container-hero">
        <h1 className="main-title">The ClotheShop</h1>
        <p className="parrafo-hero">Todo lo que buscas lo encontras acá...</p>
          <img className="img-hero" src={MyImage} alt="Imagen hero"/>       
      </div>
  )
}

export default Hero