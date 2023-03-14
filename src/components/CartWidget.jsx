import React, { useContext } from 'react'
import { FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Context} from 'react'
import { CartContext } from '../context/cartContext'

export const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext); 
  const quantity = cart.reduce((acc,curr)=>{
    return acc + curr.quantity;
  }, 0)
  return (
    
    <div className='flex justify-center text-slate-200 font-semibold text-base hover:text-indigo-300 mr-16 py-2 transition-all text-center w-fit'>
      <Link to='/cart' className='px-1 mt-1'><FaShoppingCart/></Link>
      <span className='text-base'>{quantity}</span>
    </div>
    
  )
}
                          