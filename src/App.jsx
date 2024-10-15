import React from 'react'
import Nav from './Components/Navbar/Nav'
import { Routes, Route , BrowserRouter, ScrollRestoration } from 'react-router-dom';
import StoreCategory from './Pages/StoreCategory';
import LoginSingup from './Pages/LoginSingup';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import beauty_banner from './assets/images/beauty_banner.jpg';
import facial_banner from './assets/images/facial_banner.jpg';
import hair_banner from './assets/images/hair_banner.jpg';
import baby_banner from './assets/images/baby_banner.jpg';
import ScrollTop from './Components/ScrollTop/ScrollTop'; 
import SingUp from './Components/SingUp/SingUp';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beauty' element={<StoreCategory banner={beauty_banner} category="beauty" />} />
        <Route path='/facial' element={<StoreCategory banner={facial_banner} category="facial" />} />
        <Route path='/hair' element={<StoreCategory banner={hair_banner} category="hair" />} />
        <Route path='/baby' element={<StoreCategory banner={baby_banner} category="baby" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SingUp />} />

      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App