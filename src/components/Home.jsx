import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-xl text-slate-200 font-medium mt-36'>
            <span>Buenas! Bienvenido a GameStop ;)</span>
        </div>

        <Link to='/list'>
        <button className='text-indigo-900  bg-white p-2 m-1 font-medium mt-2 rounded-lg'>Listado de productos</button>
        </Link>
    </div>
  )
}
