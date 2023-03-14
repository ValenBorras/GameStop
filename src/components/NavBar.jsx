import React from 'react'
import { CartWidget } from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (

    <nav className='flex flex-row justify-between items-center h-20'>
      <div className=' mb-20 ml-5 text-slate-200 font-semibold text-2xl mt-20 bg-transparent'>
        <Link to='/' >
          <span>Game</span><span className='text-indigo-400'>Stop</span>
        </Link>
      </div>
      <ul>
        <NavLink to={`/list/${"juego"}`} className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'>
          Juegos
        </NavLink>
        <NavLink to={`/list/${"consola"}`} className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'>
          Consolas
        </NavLink>
        <NavLink to={`/list/${"componente"}`} className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'>
          Componentes
        </NavLink>
        <NavLink to={`/list/${"periferico"}`} className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'>
          Perifericos
        </NavLink>
        <span className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'>|</span>
        <NavLink to={'/'} className='basis-1/4 text-slate-200 font-semibold text-base hover:text-indigo-300 mx-2 py-2 transition-all text-center'>
          Todos
        </NavLink>

      </ul>
    <CartWidget/>
    </nav>
  )
}
