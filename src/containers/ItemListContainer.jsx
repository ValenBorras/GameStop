import React from 'react'
import Products from '../productos.json'
import {ItemList} from '../components/ItemList'
import { useState } from 'react'

export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const mostrarProds =()=>{
    return new Promise((resolve, reject)=>{
       Products.length <= 1 ? 
       reject('No hay productos')
       : setTimeout(() => {resolve(Products)},1) 
    });
  }

  async function fetchData(){
    try{
      const data = await mostrarProds();
      setProducts(data)
    } catch (err){
      console.log(err)
    }
  }

  fetchData()
  
  return (
    <>
    <ItemList data={products}/>
    {/* <ItemDetail             
            id={3457}
            name={'name'}
            cat={'data.category'}
            price={'data.price'}
            desc={'data.description'}
            stock={9} 
    /> */}
    </>
    
  )
}
