import React , {createContext} from 'react'
import Navbar from '../components/header/Navbar'
import {Outlet} from 'react-router-dom';
import useCart from '../hooks/useCart';

export const CartContext = createContext(null);

export default function Index() {

    const [cart,dispatcher] = useCart()

    return (
        <div>
            <Navbar/>

            <CartContext.Provider value={{dispatcher,cart}}>
                <Outlet/>
            </CartContext.Provider>
        </div>
    )
}
