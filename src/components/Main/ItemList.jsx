import Item from "./Item"

const ItemList = ({ productos }) => {
  
  return (
    <div className="container">

      <div className="productos">
        {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
      </div>

    </div>
  )
}

export default ItemList


// Acá a través de un "map" muestro todos los producos que recibo, por la prop "productos", en la pantalla. Siempre que hago un "map" le tengo que poner una "key" con un identificador "id" 
