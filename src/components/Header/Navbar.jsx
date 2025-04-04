
import { Link } from 'react-router-dom'
import Logo from '../../imagenes/logo-ecommerce.jpg'
import CartWidget from './CartWidget'

export default function Navbar() {

  return (
  
    <div className="contenedor-nav">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-toggler">
            <Link className="nav-link active" to="/">
              <img className="img-logo" src={Logo} />
            </Link>
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/productos/women">Mujer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/productos/men">Hombre</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/productos/jewelery">Accesorios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/productos/electronics">Electronica</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/contacto">Contacto</Link>
              </li>
              <li> <CartWidget /></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  )
}

/* 
<div className="contenedor-nav">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse p-4" id="navbar-toggler">
            <Link className="navbar-brand p-5" to="/">
              <img src={Logo} />
            </Link>
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos/women">Mujer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/productos/men">Hombre</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/productos/jewelery">Accesorios</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-disabled="true" to="/productos/electronics">Electronica</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-disabled="true" to="/contacto">Contacto</Link>
              </li>
              <li> <CartWidget /></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

*/