import { Link } from "react-router-dom"


const Item = ({ producto }) => {
  
  return (
            <div className="col">
      <div className="card h-100 card--small">
                <img src={producto.image} className="card-image card-img-top" alt={producto.title} />
                <div className="card-body">
                  <h5 className="card-title overflow-hidden">{producto.title}</h5>
                  <Link to={`/item/${producto.id}`}  >
                    <button className="btn btn-outline-dark" type="submit">Ver mas</button>
                  </Link>  
                </div>
              </div>  
            </div>
  )
}

export default Item

