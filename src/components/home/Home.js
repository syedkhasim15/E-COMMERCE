import React from 'react'
import DisplayProducts from './DisplayProducts'
import usePagination from '../../hooks/usePagination';
import Category from './Category';
import Pagination from '../pagination/Pagination';


export default function Home() {

    const [currentPage, dispatch] = usePagination();

    return (
        <div className='p-5'>

            <div className='row g-5'>

                <nav  className="col-md-2 col-sm-12">
                    <ul  className="nav flex-column list-group">
                        <li  className='list-group-item d-flex align-items-center'>
                            <i className='bx bx-category bx-sm'></i>CATEGORIES
                        </li>

                        <Category dispatch={dispatch} category="All" catId={0}/>
                        <Category dispatch={dispatch} category="Clothes" catId={1}/>
                        <Category dispatch={dispatch} category="Electronics" catId={2}/>
                        <Category dispatch={dispatch} category="Furniture" catId={3}/>
                        <Category dispatch={dispatch} category="Shoes" catId={4}/>
                        <Category dispatch={dispatch} category="Miscellaneous" catId={5}/>                        
                    </ul>
                    <div className='mt-4 d-flex justify-content-center align-items-center mb-sm-4'>
                            <Pagination page={currentPage.page} dispatch={dispatch} />
                    </div>
                </nav>     

                <div className="col-md-10">
                    <DisplayProducts category={currentPage.category} currentPage={currentPage} dispatch={dispatch}/>
                </div>

            </div>
        </div>
    )
}
