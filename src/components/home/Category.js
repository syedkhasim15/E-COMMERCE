import React from 'react'



export default function Category({category,catId,dispatch}) {


    return (
        <li   className="nav-item list-group-item">
            <button className="nav-link active" aria-current="page" onClick={()=>dispatch({type:"CATEGORY",category:catId})}>{category}</button>
        </li>
    )
    
}
