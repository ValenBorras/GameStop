import React, { useEffect } from 'react'
import Products from '../productos.json'
import { ItemDetail } from '../components/ItemDetail';
import { useState } from 'react'
import { useParams } from 'react-router';


export const ItemDetailContainer = () => {

  const {id} = useParams()

  const [product, setProduct] = useState([]);

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
      setProduct(data.find((item)=> item.id === parseInt(id)))
    } catch (err){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchData()
  },[id])

  return (
    <>
    <ItemDetail product={product}/>
    </> 
  )
}
