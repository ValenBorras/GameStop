import React from 'react'
import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const ItemDetail = ({product}) => {
  const {id} = useParams()

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
        <ItemCount 
        stock={product.stock} 
        id={id}
        price={product.price}
        name={product.name}
        image={product.image}
        />
        <Link to='/list'>
          <button className='text-indigo-900 my-2 font-medium'> Volver al listado </button>
        </Link>
      </article>
    </div>

    </>

  )
}
