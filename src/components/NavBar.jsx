import React from 'react'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  const links = ['Juegos','Consolas','Componentes PC','Perifericos', <CartWidget/>]  
  return (

    <ul className='flex justify-center border-b  border-slate-700'>
        {links.map(e => <a href='' className=' text-slate-200 font-semibold text-lg hover:text-sky-300 px-16 py-2 transition-all'> {e} </a>)}
    </ul>

  )
}
