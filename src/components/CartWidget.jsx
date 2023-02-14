import React from 'react'
import { FaShoppingCart} from 'react-icons/fa'

export const CartWidget = () => {
  return (
    
    <div className='flex justify-center text-slate-200 font-semibold text-base hover:text-indigo-300 mx-16 py-2 transition-all text-center w-fit'>
      <span className='px-1 mt-1'><FaShoppingCart/></span>
      <span className='text-base'>0</span>
    </div>
    
  )
}
                          