import { useState,useEffect } from 'react';
import { getProductById } from '../api-transactions/Products';

export default function useCartProduct(cart){

    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState([]);
  
    useEffect(() => {

        const fetchProducts = async () => {
            let totPrice = 0
            
            const productDataPromises = cart.map(async (product) => {
                const productData = await getProductById(product.Id);
                let newPrice  = product.count * productData.price
                totPrice += newPrice
                return {...productData,count:product.count};
            });

            const resolvedProducts = await Promise.all(productDataPromises);
            setProducts(resolvedProducts);
            setPrice(totPrice)
        };
        fetchProducts();
        
    }, [cart]);

    // useEffect(()=>{

    //     let price = 0;

        

    // },[products])


    return [products,price]
}
