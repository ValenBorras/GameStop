import React from 'react'
import { ItemDetail } from '../components/ItemDetail';
import { useState } from 'react'
import Products from '../productos.json'


export const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  const mostrarProds =()=>{
    return new Promise((resolve, reject)=>{
       Products.length <= 1 ? 
       reject('No hay productos')
       : setTimeout(() => {resolve(Products)},1000) 
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

  console.log(products)

  return (
    <>
    <ItemDetail products={products}/>
    </>
     
  )
}
