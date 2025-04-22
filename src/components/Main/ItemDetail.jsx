
import ItemCount from "./ItemCount"



const ItemDetail = ({ item }) => {
  
  return (
    
    <div className="container">
      
      <h2 className="title-detalle">Información del producto</h2>
      <div className="producto-detalle">
          <img className="img-detalle" src={item.image} alt={item.title} />
          
          <div>
            <h3 className="titulo">{item.title}</h3>
            <p className="descripcion">{item.description}</p>
            <p className="categoria">Categoria: {item.category}</p>
            <p className="precio">${item.price}</p>
            <ItemCount item={item} />
          </div>
      </div>
      
      </div>
  )
}

export default ItemDetail

