import React from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');

  const db = getFirestore()
  const [cart, setCart] = useContext(CartContext)
  
  const handleSubmit = (e)=> {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({id})=> setOrderId(id));
  };

  const grandTotal = ()=>{
    let total = 0
    cart.map((i)=>{
      total += i.quantity * i.price
    })
    return total
   }; 

  const order ={
    name, 
    email, 
    items: cart, 
    total: grandTotal()
  };


  const ordersCollection = collection(db, 'orden')


  return (
    <div className="w-2/6 ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2" >
            Email
          </label>
          <input onChange={(e)=> setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Completa con tu email"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 text-sm font-bold mb-2" >
            Nombre
          </label>
          <input onChange={(e)=> setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder='Completa con tu nombre' />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-indigo-900 hover:bg-indigo-700 transition-all text-white mb-5 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Realizar Orden
          </button>
        </div>
        {orderId ? <span><span className='font-bold mr-3'>Id de tu orden:  </span> {orderId}</span> : ''}
      </form>
    </div>
  )
}
