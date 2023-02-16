import React from 'react'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const links = ['Juegos','Consolas','Componentes PC','Perifericos']  
  return (
    <div className='bg-gradient-to-br from-slate-900 to-indigo-900 font-sanz pb-1 overflow-auto scrollbar-hide'>
    <nav className='flex flex-row justify-between items-center border-b  border-slate-700 h-20'>
    <ul className='w-1/3 ml-12'>
        {links.map((e, i) => <a key={i} href='' className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'> {e} </a>)}
    </ul>
    <Link to='/' className=' mb-20 mr-[26%] text-slate-200 font-semibold text-2xl mt-20 bg-transparent '>
    <h1 >Game Stop</h1>
    </Link>
    <CartWidget/>
    </nav>
    </div>

  )
}
