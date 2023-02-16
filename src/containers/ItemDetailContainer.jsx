import React from 'react'
import Products from '../productos.json'
import { ItemDetail } from '../components/ItemDetail';
import { useState } from 'react'
import { useParams } from 'react-router';


export const ItemDetailContainer = () => {

  const {productId} = useParams()

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

  console.log(products)

  const prodFilter = products.filter((p)=> p.id === productId)

  return (
    <>
    <ItemDetail products={prodFilter}/>
    </>
     
  )
}
