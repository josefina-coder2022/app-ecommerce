
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const CartWidget = () => {

   const {cantidadEnCarrito} = useContext(CartContext)

  return (
    
      <div className="container-cartWidget">
     
      <Link className="icon-navbar" to="/carrito">
        <i className="bi bi-cart">{cantidadEnCarrito()}</i>
      </Link>

      </div>
  
  )
}

export default CartWidget

/* 
import { Link } from 'react-router-dom'

function CartWidget() {

  const [contador, setContador] = useState(1)

  const handleSumar = () => {
    setContador (contador + 1)
  }

  
  return (
    <Link to="/cart" className="iconNavBar">
      <i className="bi bi-cart4"></i>
    </Link>
  )
}

export default CartWidget
*/