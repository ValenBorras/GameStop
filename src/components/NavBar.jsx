import React from 'react'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  const links = ['Juegos','Consolas','Componentes PC','Perifericos', <CartWidget/>]  
  return (

    <ul className='flex flex-row justify-center items-center border-b  border-slate-700 h-20'>
      
        {links.map(e => <a href='' className=' basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-16 py-2 transition-all text-center hover:text-lg'> {e} </a>)}
    </ul>

  )
}
