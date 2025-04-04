
export function getProductos(categoria) {

    let url = 'https://fakestoreapi.com/products/';

    if (categoria) {
        if (categoria == "men") {
            categoria = "men's clothing"
        } else if (categoria == "women") {
            categoria = "women's clothing"
        }
        url = 'https://fakestoreapi.com/products/category/' + categoria;
    }

    return fetch(url)

        .then((response) => {
            const data = response.json()
            return data
        })

        .catch((error) => {
            console.log("Termino el pedido mal")
            console.log(error)
        })
}



export function getProducto(detalleId) {

    let url = 'https://fakestoreapi.com/products/';
    url = url + detalleId

    return fetch(url)

        .then((response) => {
            const data = response.json()
            return data
        })

        .catch((error) => {
            console.log("Termino el pedido mal")
            console.log(error)
        })
}



/*
const traerDatos = async () => {
  try {
      const response = await fetch("https://fakestoreapi.com/products/")
      const data = await response.json();
      console.log(data);

      
  } catch (error) {
      console.log(error);
  } finally {
      console.log("Finalizo el proceso");
  }
}
   

traerDatos();
 
*/




