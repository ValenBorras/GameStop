import React from 'react'
import { FaShoppingCart} from 'react-icons/fa'

export const CartWidget = () => {
  return (
    
    <div className='flex'>
      <p className='px-1 mt-1'><FaShoppingCart/></p>
      <p className=' text-base'>0</p>
    </div>
    
  )
}
