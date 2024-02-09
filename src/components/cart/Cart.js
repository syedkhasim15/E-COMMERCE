import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../pages/Index';
import Card from '../product/Card';
import useCartProduct from '../../hooks/useCartProduct';

export default function Cart() {

    const { cart } = useContext(CartContext);

    const [products,price] = useCartProduct(cart)

    return (
        <div style={{color:"rgb(129 220 220 / 91%)"}} className="px-5">
            <div className="my-4 d-flex justify-content-center align-items-center">
                <h5><i class='bx bxs-cart-alt bx-md'> = ${price}</i></h5>
            </div>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {

                    cart?.length > 0 ? products.map((product) => (
                                            <div>
                                                <Card key={product.id}  product={product} isCart = {true} />
                                            </div>
                                        ))
                                    : <div>EMPTY CART</div>
                }
                
            </div>
        </div>
    );
}
