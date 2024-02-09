import { useState,useEffect } from 'react'
import { productPagination,getProductByCategory } from '../api-transactions/Products'

export default function useProductData(category,page) {

    const [data,setData] = useState([])

    useEffect(()=>{

        const fetchData = async()=>{

            if(category===0)
            {
                productPagination(page,21)
                    .then((res)=>{
                        setData(res)
                
            })}
            else
                getProductByCategory(category,page,9)
                    .then((res)=>{
                        setData(res)
                        console.log(category) 
            })
        }

        fetchData()
    },[category,page])

    return data
}
