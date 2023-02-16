import React from 'react'
import { FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  return (
    
    <div className='flex justify-center text-slate-200 font-semibold text-base hover:text-indigo-300 mr-16 py-2 transition-all text-center w-fit'>
      <Link to='/cart' className='px-1 mt-1'><FaShoppingCart/></Link>
      <span className='text-base'>0</span>
    </div>
    
  )
}
                          