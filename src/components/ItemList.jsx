import React from 'react'
import {Item} from './Item'

export const ItemList = ({data}) => {
  return (
    <>

    <section className=' flex flex-wrap mx-10 justify-center w'>
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
}

