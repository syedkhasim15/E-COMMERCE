import React from 'react'
import Card from './Card'

function ProductCards({data}) {

    return (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            
            {
                data.map((product)=>(
                    <Card key={product.id} product={product}/>
                ))
            }

        </div>
    )
}

export default React.memo(ProductCards)
