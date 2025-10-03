const URL= "https://fakestoreapi.com/products";
//funcion para GET products
export async function getProducts() {
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


//funcion para GET products/id
export async function getProductsById(id) {
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


//funcion para POST products
export async function postProducts(producto) {
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
postProducts( {
    title: 'test product',
    price: 13.5,     
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
    });

//funcion para DELETE

export async function deleteProducts(id) {
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












