import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({product}) => {

  return (
    <>
          <article className='flex flex-col bg-slate-200 m-2 w-56 h-92 items-center text-slate-900 rounded-md'>
          <h1 className='font-bold'>{product.name}</h1>
          <picture className='m-2'>
            <img src='' alt="" />
          </picture>
          <span className=' opacity-70' >{product.cat}</span>
          <span className=' opacity-70' >{product.desc}</span>

          <span>${product.price}</span>
          <ItemCount stock={product.stock}/>
          </article>
    </>

  )
}
