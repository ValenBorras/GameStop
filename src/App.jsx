import React from 'react';
import { ItemListContainer } from './containers/ItemListContainer';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './containers/ItemDetailContainer';

const App = () => {
  
  return (
    <div className='bg-gradient-to-br from-slate-900 to-indigo-800 font-sanz pb-1 overflow-auto scrollbar-hide'>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/list/:category' element={<ItemListContainer/>}/>
        <Route exact path='/detail/:id' element={<ItemDetailContainer/>}/>

      </Routes>
    </BrowserRouter>
    </div>   

  )
}

export default App
