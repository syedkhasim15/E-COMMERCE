import React from 'react'
import DisplayProducts from './DisplayProducts'
import usePagination from '../../hooks/usePagination';
import Category from './Category';

export default function Home() {

    const [currentPage, dispatch] = usePagination();

    return (
        <div className='p-5'>

            <div className='row g-5'>

                <div className="col-10">
                    <DisplayProducts category={currentPage.category} currentPage={currentPage} dispatch={dispatch}/>
                </div>

                <nav className="col-2">
                    <ul className="nav flex-column list-group">
                        <li className='list-group-item d-flex align-items-center'>
                            <i className='bx bx-category bx-sm'></i>CATEGORIES
                        </li>

                        <Category dispatch={dispatch} category="All" catId={0}/>
                        <Category dispatch={dispatch} category="Clothes" catId={1}/>
                        <Category dispatch={dispatch} category="Electronics" catId={2}/>
                        <Category dispatch={dispatch} category="Furniture" catId={3}/>
                        <Category dispatch={dispatch} category="Shoes" catId={4}/>
                        <Category dispatch={dispatch} category="Miscellaneous" catId={5}/>                        
                         
                    </ul>
                </nav>     
            </div>
        </div>
    )
}
