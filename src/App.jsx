import React from 'react';
import Nav from './Components/Navbar/Nav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
import banner_3 from './assets/images/banner_3.jpg';
import ScrollTop from './Components/ScrollTop/ScrollTop'; 
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import 'react-toastify/dist/ReactToastify.css'; 
import Store from './Pages/Store';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <ScrollTop />
        <Nav />
        <ToastContainer />
        
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            
            {/* Beauty category */}
            <Route 
              path='/beauty' 
              element={
                <StoreCategory 
                  banner={beauty_banner} 
                  category="beauty" 
                  description="Explore the best beauty products that enhance your radiance. From skincare to cosmetics, we have it all!" 
                />
              } 
            />

            {/* Facial category */}
            <Route 
              path='/facial' 
              element={
                <StoreCategory 
                  banner={facial_banner} 
                  category="facial" 
                  description="Pamper yourself with premium facial treatments. Our products are designed to give you the glow you deserve." 
                />
              } 
            />

            {/* Hair category */}
            <Route 
              path='/hair' 
              element={
                <StoreCategory 
                  banner={hair_banner} 
                  category="hair" 
                  description="Get the best hair care products to ensure your hair stays healthy, shiny, and strong." 
                />
              } 
            />

            {/* Baby category */}
            <Route 
              path='/baby' 
              element={
                <StoreCategory 
                  banner={baby_banner} 
                  category="baby" 
                  description="Gentle care for your baby with safe and organic products designed for the most delicate skin." 
                />
              } 
            />

            <Route path='/store' element={<Store banner={banner_3} />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product/>} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
