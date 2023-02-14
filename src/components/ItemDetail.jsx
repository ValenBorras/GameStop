import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({products}) => {
  const prodFilter = products.filter((product)=> product.id == 2)
  return (
    <>
        {prodFilter.map((prod)=>(
          <article className='flex flex-col bg-slate-200 m-2 w-56 h-92 items-center text-slate-900 rounded-md'>
          <h1 className='font-bold'>{prod.name}</h1>
          <picture className='m-2'>
            <img src='' alt="" />
          </picture>
          <span className=' opacity-70' >{prod.cat}</span>
          <span className=' opacity-70' >{prod.desc}</span>

          <span>${prod.price}</span>
          <ItemCount stock={prod.stock}/>
          </article>
        ))}
    </>

  )
}
