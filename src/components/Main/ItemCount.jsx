import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';

const ItemCount = ({item}) => {

    const [cantidad, setCantidad] = useState(1)
    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito)
   

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < 10 && setCantidad(cantidad + 1)
    }
    
    

    return (
        <div className="container-count">
            <div className="item-count">
                <button onClick={handleRestar} className="button-count">-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar} className="button-count">+</button>
            </div>
            <button className="agregar-al-carrito" onClick={() => {agregarAlCarrito(item, cantidad)}}>
            Agregar al carrito</button>
        </div>
    )
}


export default ItemCount