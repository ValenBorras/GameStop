import React from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
  return (
    <>
    <div className='text-slate-100 font-medium text-center my-10'>Cart</div>
    <Link to='/' >
        <div className='text-indigo-300 font-medium text-center'>Volver</div>
    </Link>
    </>
  )
}
