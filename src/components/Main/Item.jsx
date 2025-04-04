import { Link } from "react-router-dom"


const Item = ({ producto }) => {
  
  return (

    
            <div className="col">
              <div className="card h-100">
                <img src={producto.image} className="card-image card-img-top" alt={producto.title} />
                <div className="card-body">
                  <h5 className="card-title overflow-hidden">{producto.title}</h5>
                  <Link to={`/item/${producto.id}`}  >
                    <button className="btn btn-outline-dark" type="submit">Ver mas</button>
                  </Link>  
                </div>
              </div>
            </div>
   





    // <div className="producto">
      
    //   <div>
    //     <img src={producto.image} alt={producto.title} />
    //     <h4>{producto.title}</h4>
    //     <p>Precio: $ {producto.price}</p>
    //     <p>Categoria: {producto.category}</p>
    //     <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
    //   </div>
      
    // </div>
  )
}

export default Item

/*
<section className="card-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.productos.map((item) => {

          return (
            <div className="col" key={item.id}>
              <div className="card">
                <img src={item.image} className="card-image card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title overflow-hidden">{item.title}</h5>
                  <Link to={`/item/${item.id}`}  >
                    <button className="btn btn-outline-primary" type="submit">Ver mas</button>
                  </Link>  
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
*/
