import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext() // acá creo el contexto "createContext" y toda la lógica del contexto la voy a manejar a dentro de éste archivo

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial)

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }

        const nuevoCarrito = [...carrito]

        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito)
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito))
   
    }, [carrito])
    

    return (

        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}> 
            {children}
        </CartContext.Provider>
    )
}