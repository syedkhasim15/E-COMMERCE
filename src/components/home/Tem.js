import React,{useContext} from 'react'
import { CartContext } from '../../pages/Index'


export default function Tem() {

    const useCartContext = useContext(CartContext)
    
    return (
        <div>
            <button className='btn btn-dark' onClick={useCartContext.handleCart}>Add to cart</button>
            <p>{useCartContext.cart[1]}</p>
        </div>
    )
}
