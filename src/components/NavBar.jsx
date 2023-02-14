import React from 'react'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  const links = ['Juegos','Consolas','Componentes PC','Perifericos']  
  return (
    <nav className='flex flex-row justify-between items-center border-b  border-slate-700 h-20'>
    <ul className='w-1/3 ml-12'>
        {links.map((e, i) => <a key={i} href='' className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'> {e} </a>)}
    </ul>
    <h1 className=' mb-20 mr-[26%] text-slate-200 font-semibold text-2xl mt-20 bg-transparent '>Game Stop</h1>
    <CartWidget/>
    </nav>

  )
}
