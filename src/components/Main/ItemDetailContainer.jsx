import { useEffect, useState } from "react"
//import { getProducto } from "../../utils"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const id = useParams().id


  useEffect(() => {

    const docRef = doc(db, "productos", id)
    getDoc(docRef)
      .then((resp) => {
        setItem({ ...resp.data(), id: resp.id })
     })
    
    /* getProducto(Number(id))
      .then((res) => {
        setItem (res)
     }) */
  
  }, [id])
  

  return (

    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer

// con "useParams" se captura el parametro dentro de la url, voy a hacer que los parametros sean dinámicos y no estáticos, y así cuando aprete el boton de "ver-mas" me va a mostrar el producto que seleccioné que va a identificar de forma dinámica a traves de su "id"

// "useParams" es un hook de react que me retorna un objeto con los parámetros que haya en la url. El useParams siempre devuelve el valor como un "string", por eso hay que convertir lo que recibimos (el id del producto) a formato número (con Number). Ya que en la url de la Api el "id" esta en formato número, y lo estoy recibiendo desde el useParams como un string