import { myAxios } from "./Helper"


// Fetch all products by pagination
export const productPagination = (offset=0,limit=9)=>{

    return myAxios.get(`products?offset=${offset}&limit=${limit}`)
                    .then((respone)=>respone.data)
                    
}


// Fetch all products by category  pagination
export const getProductByCategory = (category=1,offset=0,limit=9)=>{

    return myAxios.get(`categories/${category}/products?offset=${offset}&limit=${limit}`)
                    .then((respone)=>respone.data)
                    
}

// Fetch single product by id
export const getProductById = (id)=>{
    
    return myAxios.get(`products/${id}`)
                    .then((respone)=>respone.data)
}