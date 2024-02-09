import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function CartButtons({dispatcher,id,isCart}) {
  return (
    <div>
            {
                isCart === false ? 
                <>
                    <button className='btn btn-dark me-2' onClick={()=>dispatcher({type:"ADD",id:id})}>Add to cart</button>
                    <NavLink to="/cart"><button className='btn btn-dark'>Go to cart</button></NavLink>
                </>
                : 
                
                <>
                
                    <button className='btn btn-dark me-2' onClick={()=>dispatcher({type:"DELETE",id:id})}>Delete</button>
                    <button className='btn btn-dark me-2' onClick={()=>dispatcher({type:"INCREMENT",id:id})}>+</button>
                    <button className='btn btn-dark me-2' onClick={()=>dispatcher({type:"DECREMENT",id:id})}>-</button>
                
                </>
            }
    </div>
  )
}
