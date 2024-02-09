import React from 'react'

export default function Pagination({page,dispatch}) {

  return (

        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                    <button className="page-link" href="#" aria-label="Previous" onClick={()=>dispatch({type:"DECREMENT"})}>
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                    </li>
                    <li className="page-item"><button className="page-link" onClick={()=>dispatch({type:"JUMP",toPage:1})} >1</button></li>
                    <li className="page-item"><button className="page-link" onClick={()=>dispatch({type:"JUMP",toPage:2})} >2</button></li>
                    <li className="page-item"><button className="page-link" onClick={()=>dispatch({type:"JUMP",toPage:3})} >3</button></li>
                    <li className="page-item">
                    <button className="page-link" aria-label="Next" onClick={()=>dispatch({type:"INCREMENT"})}>
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                    </li>
                </ul>
            </nav>
            <p>{page}</p>
        </>
  )
}
