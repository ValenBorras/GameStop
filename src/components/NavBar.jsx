import React from 'react'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (

    <nav className='flex flex-row justify-between items-center border-b  border-slate-700 h-20'>
      <div>
      <Link to='/' className=' mb-20 mr-[26%] text-slate-200 font-semibold text-2xl mt-20 bg-transparent '>
        <h1 >Game Stop</h1>
      </Link>
      </div>
      <ul>
      <Link to={`/list/${"juego"}`} className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'>
        Juegos
      </Link>
      <Link to={`/list/${"consola"}`} className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'>
        Consolas
      </Link>
      <Link to={`/list/${"componente"}`} className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'>
        Componentes
      </Link>
      <Link to={`/list/${"periferico"}`} className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'>
        Perifericos
      </Link>
      </ul>
    <CartWidget/>
    </nav>


  )
}
