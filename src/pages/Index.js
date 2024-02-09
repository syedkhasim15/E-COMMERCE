import React , {createContext,useEffect,useState} from 'react'
import Navbar from '../components/header/Navbar'
import {Outlet} from 'react-router-dom';

export const CartContext = createContext(null);

export default function Index() {

    const [cart,setCart] = useState([])

    const handleCart = (id,type)=>{
        
        const idExist = cart.some(item=> item.Id === id)
        if(type === "ADD")
        {
            
            if(idExist===false)
                setCart((prev)=>[...prev,{Id:id,count:1}])
            else
                alert("it already exist")
        }
        else if(type === "DELETE")
        {
            if(idExist===false)
                alert("Product not exist in your cart")
            else
            {
                let newCart = cart.filter(item=> item.Id !== id)
                setCart(newCart)
            }
        }

        
    }

    return (
        <div>
            <Navbar/>

            <CartContext.Provider value={{handleCart,cart}}>
                <Outlet/>
            </CartContext.Provider>
        </div>
    )
}
