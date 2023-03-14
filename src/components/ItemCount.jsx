import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom';

export const ItemCount = ({stock, id, price, name, image}) => {
  const [count, setCount] = useState(1);
  const [cart,setCart] = useContext(CartContext)

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id && item.quantity + count <= stock) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, name, image, stock }];
      }
    });
  };

  return (
    <>
    <section className='flex justify-center items-center'>
      <button onClick={()=> count > 1? setCount(count-1) : ''} className='text-xs m-2 bg-slate-900 text-slate-200 h-4 w-5 text-center p-1 pb-4 rounded-md'><FaMinus/></button>
      <span>{count}</span>
      <button onClick={()=> count < stock ? setCount(count+1): ''} className='text-xs m-2 bg-slate-900 text-slate-200 h-4 w-5 text-center p-1 pb-4 rounded-md'><FaPlus/></button>
    </section>
    <section>
    <Link to='/cart'>
          <button className='bg-indigo-900 text-slate-200 p-2 font-medium my-1 rounded-lg' onClick={()=> addToCart()}> Añadir al carrito </button>
    </Link>
    </section>
    </>
  )
}
