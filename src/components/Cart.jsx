import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'
import { Checkout } from './Checkout'

export const Cart = () => {
 const [cart, setCart] = useContext(CartContext)
 const grandTotal = ()=>{
  let total = 0
  cart.map((i)=>{
    total += i.quantity * i.price
  })
  return total
 }; 
  return (
    
    <>
    {cart.length > 0 ?  
    <>
      <div className='flex flex-col justify-center items-center'>
    {cart.map((item) => {
      return (
        <div key={item.id} className='flex flex-row justify-between bg-white w-3/4 h-92 rounded-md text-lg my-5 items-center'>
          <article  className='flex flex-row justify-between items-center text-slate-800 '>
          <picture className='m-2 opacity-100 flex justify-center w-40'>
            <img src={item.image} className=' h-32 '/>
          </picture>
          <h1 className='font-bold m-2'>{item.name}</h1>
          <span className='font-medium m-2'>${item.price}</span>
          <section className='flex justify-center items-center'>
            <button 
            onClick={()=>{setCart(cart.map((i)=>{return i.id === item.id && i.quantity > 1 ?  {...i, quantity: i.quantity - 1}: i}))}} 
            className='text-xs m-2 bg-slate-800 text-slate-200 h-4 w-5 text-center p-1 pb-4 rounded-md'><FaMinus/></button>
              <span>{item.quantity}</span>
            <button 
            onClick={()=>{setCart(cart.map((i)=>{return i.id === item.id && i.quantity < item.stock ?  {...i, quantity: i.quantity + 1}: i}))}} 
            className='text-xs m-2 bg-slate-800 text-slate-200 h-4 w-5 text-center p-1 pb-4 rounded-md'><FaPlus/></button>
          </section>
          <span>Total: ${item.quantity * item.price}</span>
        </article>
          <button onClick={()=> setCart(cart.filter((i)=> i.id !== item.id))} className='bg-red-500 text-slate-100 p-2 font-medium text-sm rounded-lg mr-5'>
                Eliminar
          </button>
        </div>
        
        );
      })}
    <article className='flex flex-row bg-white w-3/4 h-92 items-center text-slate-800 rounded-md text-lg my-5'>
    <span className='font-bold m-5'>Total de tu compra : ${grandTotal()}</span>
    </article>
    <Checkout/>
      </div>
    </>

    : 

    <div className='flex flex-col justify-center items-center'>
        <div className='text-xl text-slate-200 font-medium my-28'>
            <span>No hay items en tu carrito :C</span>
        </div>
        <Link to='/' >
            <div className='text-indigo-300 font-medium text-center'>Volver al listado</div>
        </Link>
    </div>
    }
    </>
  )
}
