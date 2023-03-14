import React from 'react';
import { ItemListContainer } from './containers/ItemListContainer';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { Cart } from './components/Cart';
import { StateComponent } from './context/cartContext';

const App = () => {
  
  return (
    <div className='bg-gradient-to-br from-slate-900 to-indigo-800 font-sanz pb-1 overflow-auto h-screen'>
    <StateComponent>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/list/:category' element={<ItemListContainer/>}/>
          <Route exact path='/list' element={<ItemListContainer/>}/>
          <Route exact path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </StateComponent>
    </div>   
  )
}

export default App
