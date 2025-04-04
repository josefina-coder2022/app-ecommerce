
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

/*

<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>

 */