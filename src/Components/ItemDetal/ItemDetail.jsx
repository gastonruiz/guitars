import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({ product }) {
  return (
      
      <>
      <div className="relative mx-auto w-full" >
        <h1>
        {product.name}
        </h1>
        <div className='w-full'>
        <img src= {product.img} alt="producto" width={400} />
        </div>
        <div>
            Stock = {product.stock}
        </div>
        </div>
        <ItemCount product={product}/>
    </>
  )
}
