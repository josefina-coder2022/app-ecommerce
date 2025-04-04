import { useEffect, useState } from "react"
//import { getProductos } from "../../utils"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"




const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const categoria = useParams().categoria


  useEffect(() => {

    const productosRef = collection(db, "productos")
    const q = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef
    

    getDocs(q)
      .then((resp) => {
        setProductos(
         
          resp.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
       )
     })

    /* const resultado = getProductos(categoria)
    resultado.then((productos) => {
      setProductos(productos)
 */
    }, [categoria])

    return (
      <div>
        <ItemList productos={productos} />
      </div>
    )
}

export default ItemListContainer


 


  

  







// Acá sólo tengo la lógica del pedido de los productos adentro del useEffect y los seteo con el useState...luego en el return paso a traves de props, el array de los productos, al componente ItemList a donde los voy a mostrar a los productos

/*
      if (categoria) {
     if (categoria == "men") {
       titulo = "Products men's clothing"
       
     } else if (categoria == "women") {
       titulo = "Products women's clothing"
      
     } else if (categoria == "jewelery") {
       titulo = "Products jewelery"
     
     }
     setTitulo(categoria)
   }
      */