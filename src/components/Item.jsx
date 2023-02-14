import React from 'react'
// import picture from '../assets/HHLL.png'

export const Item = ({name,cat,price, image}) => {


  return (
    <article className='flex flex-col bg-slate-200 m-2 w-56 h-92 items-center justify-center text-slate-900 rounded-md hover:shadow-lg opacity-90 hover:opacity-100 transition-all'>
      <h1 className='font-bold'>{name}</h1>
      <picture className='m-2 opacity-100'>
        <img src={image} alt="" />
      </picture>
      <span className=' opacity-70' >{cat}</span>
      <span>${price}</span>
      <section>
        <button  className='bg-indigo-900  text-slate-200 p-2 m-1 font-bold mt-2 rounded-lg'>Detalles</button>
      </section>
    </article>
  )
}
