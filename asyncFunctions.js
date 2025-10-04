const URL= "https://fakestoreapi.com/products";
//funcion para GET productos
export async function getProductos() {
    try {
        const response= await fetch(URL)
        const data = await response.json()
        console.log(data);
  }
     catch (error) {
       console.error("Ocurrió un error:", error); 
    }finally {
    console.log("Petición finalizada");
  }
}


//funcion para GET productos/id
export async function getProductosById(id) {
    try {
        const response= await fetch(`${URL}/${id}`)
        const data = await response.json()
        console.log(data);
  }
     catch (error) {
       console.error("Ocurrió un error:", error); 
    }finally {
    console.log("Petición finalizada");
  }
}


//funcion para POST productos
export async function postProductos(producto) {
    try {
        const response= await fetch(URL,{
            method: 'POST', 
            body: JSON.stringify(producto),
            headers: {
              'Content-Type': 'application/json',
            }
        })
        
        const data = await response.json()
        console.log(data);
  }
     catch (error) {
       console.error("Ocurrió un error:", error); 
    }finally {
    console.log("Petición finalizada");
  }
}
postProductos( {
    title: 'test product',
    price: 13.5,     
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
    });

//funcion para DELETE

export async function deleteProductos(id) {
    try {
        const response= await fetch(`${URL}/${id}`,{
            method: 'DELETE', 
        })
        const data = await response.json()
        console.log("producto eliminado:",data);
  } 
        catch (error) {
         console.error("Ocurrió un error:", error);
    }finally {
    console.log("Petición finalizada");
    }
}












