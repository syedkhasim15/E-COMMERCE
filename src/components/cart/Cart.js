import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../pages/Index';
import Card from '../product/Card';
import { getProductById } from '../../api-transactions/Products';

export default function Cart() {
    const { cart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productDataPromises = cart.map(async (product) => {
                const productData = await getProductById(product.Id);
                return productData;
            });

            const resolvedProducts = await Promise.all(productDataPromises);
            setProducts(resolvedProducts);
        };

        fetchProducts();
    }, [cart]);

    return (
        <div className="p-5">
            <div className='row row-cols-1 row-cols-md-4'>
                {

                    cart.length > 0 ? products.map((product) => (
                                            <Card key={product.id} product={product} isCart = {true} />
                                        ))
                                    : <div>EMPTY CART</div>
                }
                
            </div>
        </div>
    );
}
