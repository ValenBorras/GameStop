import React from 'react';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

const App = () => {

  const greeting = 'Buenas, bienvenido a Game Stop! *nombre totalmente original* ;)'
  return (
    <body className=' bg-gradient-to-br from-slate-900 to-indigo-900 h-screen w-screen font-sanz'>
      <NavBar/>
      <ItemListContainer greeting={greeting} />
      
    </body>   
  )
}

export default App
