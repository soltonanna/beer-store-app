import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/context';
import CartProvider from './context/cart-provider';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import OurBeer from './pages/OurBeer';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart/Cart';
import SingleBeer from './pages/Single/SingleBeer';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className='beer-store'>
      {
        <Router >
          <CartProvider>
            <AuthProvider>
              <Header />
              
              <Routes>
                <Route path = '/beer-store-app' exact element = { <Home /> } />
                <Route path = '/beer-store-app/our-beer' element = { <OurBeer /> } />
                <Route path = '/beer-store-app/our-story' element = { < OurStory /> } />
                <Route path = '/beer-store-app/contact' element = { <Contact /> } />
                <Route path = '/beer-store-app/shop' element = { <Shop /> } />
                <Route path = '/beer-store-app/cart' element = { <Cart /> } />
                <Route path = '/beer-store-app/beer/:id' element = { <SingleBeer /> } />
                <Route path = '*' element = { <NotFound /> } />
              </Routes>

              <Footer />
            </AuthProvider>
          </CartProvider>
        </Router> 
      }
    </div>
  )
}

export default App;