import React from 'react'
import Nav from './Components/Navbar/Nav'
import { Routes, Route , BrowserRouter } from 'react-router-dom';
import StoreCategory from './Pages/StoreCategory';
import LoginSingup from './Pages/LoginSingup';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
/* import card_cover_1 from './assets/images/card_cover_1.jpg';
import card_cover_2 from './assets/images/card_cover_2.jpg';
import card_cover_3 from './assets/images/card_cover_3.jpg';
import card_cover_4 from './assets/images/card_cover_4.jpg';
*/
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        /* <Route path='/beauty' element={<StoreCategory card={card_cover_1} category="beauty" />} />
        <Route path='/facial' element={<StoreCategory card={card_cover_2} category="facial" />} />
        <Route path='/hair' element={<StoreCategory card={card_cover_3} category="hair" />} />
        <Route path='/baby' element={<StoreCategory card={card_cover_4} category="baby" />} /> */
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSingup />} />

      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App
