import React from 'react'
import { ItemCount } from './ItemCount'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const ItemDetail = ({product}) => {

  return (
    <>

    <div className='flex flex-col justify-center items-center'>
      <article className='flex flex-col bg-white w-1/3 h-92 items-center text-slate-900 rounded-md text-lg my-5'>
        <h1 className='font-bold'>{product.name}</h1>
        <picture className='m-2 opacity-100 w-3/4 flex justify-center'>
          <img src={product.image} className=' h-56'/>
        </picture>
        <span className='font-medium text-slate-800' >{product.category }</span>
        <span className=' opacity-80 mx-3' >{product.description}</span>

        <span className='font-medium'>${product.price}</span>
        <ItemCount stock={product.stock}/>
        
        <Link to='/cart'>
          <button className='bg-indigo-900 text-slate-200 p-2 font-medium my-1 rounded-lg'> Añadir al carrito </button>
        </Link>
        <Link to='/list'>
          <button className='text-indigo-900 my-2 font-medium'> Volver al listado </button>
        </Link>
      </article>
    </div>

    </>

  )
}
