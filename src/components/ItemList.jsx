import React, { memo } from 'react'
import {Item} from './Item'

export const ItemList = memo(function ItemList({data}){
  return (
    <>
    <section className=' flex flex-wrap justify-center w-3/4'>
      {data?.map((data)=>(
        <Item 
          key={data.id}
          id={data.id}
          name={data.name}
          cat={data.category}
          price={data.price}
          desc={data.description}
          stock={data.stock}
          image={data.image}
        />
      ))}
    </section>
    </>
  )
})

