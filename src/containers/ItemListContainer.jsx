import React from 'react'
import {ItemList} from '../components/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from "firebase/firestore"


export const ItemListContainer = () => {

  const {category} = useParams();

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const db = getFirestore();
    const itemCollection = collection(db, 'Productos');
    getDocs(itemCollection).then((prods)=>{
      const docs = prods.docs.map((doc)=> {
       return { ...doc.data(),id: doc.id}
      });
      setProducts(docs)
    })
  },[])

  const prodFilter = products.filter((p)=> p.category === category)
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
        <div className='text-xl text-slate-200 font-medium my-16'>
            <span>Buenas! Bienvenido a GameStop ;)</span>
        </div>
        {category ? <ItemList data={prodFilter}/> : <ItemList data={products}/>}
    </div>
      
    </>
  )
}
