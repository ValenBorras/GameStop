import React, { useEffect } from 'react';
import { ItemDetail } from '../components/ItemDetail';
import { useState } from 'react';
import { useParams } from 'react-router';
import {doc, getDoc, getFirestore} from "firebase/firestore";


export const ItemDetailContainer = () => {

  const {id} = useParams()

  const [product, setProduct] = useState([]);

  useEffect(()=>{
    const db = getFirestore();
    const item = doc(db, 'Productos', `${id}` );
    getDoc(item).then((prod)=>{
      if(prod.exists()){
        const doc = prod.data();
        setProduct(doc);
      }
    })
  },[])

  return (
    <>
    <ItemDetail product={product}/>
    </> 
  )
}
