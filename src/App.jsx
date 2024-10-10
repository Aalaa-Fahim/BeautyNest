import React from 'react'
import Nav from './Components/Navbar/Nav'
import { Routes, Route , BrowserRouter } from 'react-router-dom';
import StoreCategory from './Pages/StoreCategory';
import LoginSingup from './Pages/LoginSingup';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beauty' element={<StoreCategory category="beauty" />} />
        <Route path='/facial' element={<StoreCategory category="facial" />} />
        <Route path='/hair' element={<StoreCategory category="hair" />} />
        <Route path='/baby' element={<StoreCategory category="baby" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSingup />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App