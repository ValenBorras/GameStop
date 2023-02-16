import React from 'react'
import { Link } from 'react-router-dom'
// import picture from '../assets/HHLL.png'

export const Item = ({name,cat,price, image, id}) => {


  return (
    <article className='flex flex-col bg-white m-2 w-56 h-92 items-center justify-center text-slate-900 rounded-md hover:shadow-lg opacity-80 hover:opacity-100 transition-all'>
      <h1 className='font-bold'>{name}</h1>
      <picture className='m-2 opacity-100 w-3/4 flex justify-center'>
          <img src={image} className=''/>
        </picture>
      <span className=' opacity-70' >{cat}</span>
      <span>${price}</span>
      <section>
        <Link to={`/detail/${id}`}>
          <button className='bg-indigo-900  text-white p-2 m-1 font-bold mt-2 rounded-lg'>Detalles</button>
        </Link>
      </section>
    </article>
  )
}
