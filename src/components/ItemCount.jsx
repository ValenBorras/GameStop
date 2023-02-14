import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { useState } from 'react';

export const ItemCount = ({stock}) => {
  const [count, setCount] = useState(0);

  return (
    <>
    <section className='flex justify-center items-center'>
      <button onClick={()=> count > 0? setCount(count-1) : ''} className='text-xs m-2 bg-slate-900 text-slate-200 h-4 w-5 text-center p-1 pb-4 rounded-md'><FaMinus/></button>
      <span>{count}</span>
      <button onClick={()=> count < stock ? setCount(count+1): ''} className='text-xs m-2 bg-slate-900 text-slate-200 h-4 w-5 text-center p-1 pb-4 rounded-md'><FaPlus/></button>
    </section>

    </>
  )
}
