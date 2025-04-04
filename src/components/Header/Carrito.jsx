import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
    
    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
      
        <div className="container-carrito">
            <h1 className="main-title-carrito">Carrito</h1>

            {
                carrito.map((producto) => (
                    <div className="div-carrito-id" key={producto.id}>
                        <h3 className="subtitulo-carrito">{producto.title}</h3>
                        <p className="parrafo-carrito">Precio Unitario: ${producto.price}</p>
                        <p className="parrafo-carrito">Precio Total: ${producto.price * producto.cantidad}</p>
                        <p className="parrafo-carrito">Cantidad: {producto.cantidad}</p>
                        <hr />
                    </div>
                ))

            }

           
            {
                carrito.length > 0 ?
                <>
                    <h2 className="precio-total-carrito">Precio Total del Carrito: ${precioTotal()}</h2>
                        <button className="button-carrito" onClick={handleVaciar}>Vaciar</button>
                        <Link className="finalizar-compra" to="/checkout">Finalizar Compra</Link>
                </> :
                <h3 className="carrito-vacio">El carrito está vacío...</h3>    
            }
            
        </div>
        
  )
}

export default Carrito