import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../pages/Index';
import CartButtons from '../cart/CartButtons';
import './card.css'

export default function Card({ product,isCart=false }) {

    const { dispatcher, cart } = useContext(CartContext);

    return (
        <>
                <div className="col card">
                    <NavLink to={"/product/"+product.id} ><img src={product.images[0]} className="card-img-top card-body" alt="..." /></NavLink>
                    <div className="card-body">
                        
                        <h6 className="card-title">{product.title}</h6>
                        <div className='row my-3'>
                            <div className="col-8">
                                <label htmlFor="">Price</label>
                                <h5>$ {product.price}</h5>
                            </div>

                            <div className="col-4">
                                <label htmlFor="">Qty</label>
                                <h5>{product.count}</h5>
                            </div>
                        </div>

                        <CartButtons dispatcher={dispatcher} id={product?.id} isCart={isCart}/>
                        
                    </div>
                </div>
        </>
    );
}
