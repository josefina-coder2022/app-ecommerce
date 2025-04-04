import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosRef = collection(db, "pedidos")
        
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
         })
    }

    if (pedidoId) {
        return (
            <div className="container-checkout-final">
                <h1 className="title-contacto">Muchas gracias por tu compra...</h1>
                <p className="parrafo-checkout">Tu número de comprobante de compra es:  {pedidoId} </p>
            </div>
        )
    }


  return (
      <div>
          <div className="container-checkout">

              <h1 className="title-contacto">Finalizar compra</h1>

              <form className="formulario" onSubmit={handleSubmit(comprar)}>

                  <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                  <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                  <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                  <button className="button-contacto" type="submit">Comprar</button>

              </form>

          </div>
          
      </div>
  )
}

export default Checkout

