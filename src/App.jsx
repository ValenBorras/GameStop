import React from 'react';
import { ItemListContainer } from './containers/ItemListContainer';
import { NavBar } from './components/NavBar';

const App = () => {

  const greeting = 'Buenas, bienvenid@ a Game Stop! *nombre totalmente original* ;)'
  
  return (
    <div className='bg-gradient-to-br from-slate-900 to-indigo-900 font-sanz pb-1 overflow-auto scrollbar-hide'>
      <NavBar/>
      <ItemListContainer greeting={greeting} />
    </div>   
  )
}

export default App
