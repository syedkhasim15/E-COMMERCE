import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../pages/Index';

export default function Card({ product,isCart=false }) {

    const { handleCart, cart } = useContext(CartContext);

    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={product.images[0]} className="card-img-top card-body" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <div className="row mb-3 g-1">
                            <div className="col-5 text-truncate">
                                {product.description}
                            </div>
                            <div className="col-5"><Link className='text-decoration-none'>Readmore</Link></div>
                        </div>

                        <div className='row'>
                            <label htmlFor="">Price</label>
                            <div className={isCart===false ? "col-3" : "col-8"}>
                                <h5>$ {product.price}</h5>
                            </div>
                            <div className={isCart===false ? "col-9" : "col-4"}>
                                {
                                    isCart === false ? <><button className='btn btn-dark me-2' onClick={()=>handleCart(product.id,"ADD")}>Add to cart</button>
                                                        <NavLink to="/cart"><button className='btn btn-dark'>GO TO CART</button></NavLink></>
                                                    : <><button className='btn btn-dark me-2' onClick={()=>handleCart(product.id,"DELETE")}>Delete</button></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
