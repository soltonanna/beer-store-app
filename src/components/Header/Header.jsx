import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartContext from '../../context/cart-context';
import logo from '../../asset/logo.png';

import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

import SocialMedia from '../UI/SocialMedia';
import Navbar from '../Navbar';

const Header = () => {

  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <header>
      <div className='container'>
        <div id='social-search-cart'>
          <SocialMedia />
          
          <div>
            <span id='search'>
              <FaMapMarkerAlt size={16} />
              Find our beer
            </span>

            <span id='cart' onClick={()=>navigate('/beer-store-app/cart')}>
              <FaShoppingCart size={18} />
              { cartCtx.items.length } 
              { cartCtx.items.length > 1 ? ' items' : ' item' }
            </span>
          </div>

        </div>

        <div id='logo-navbar'>
          <div id='logo' onClick={()=>navigate('/beer-store-app')}>
            <img src={logo} alt="Beer logo" />
            <h3>craft beer <br/> <span>est 1956</span></h3>
          </div>
          <Navbar />
        </div>

        <div className='main-title'>
            <h2>a very warm welcome to our</h2>
            <h1>beer shop</h1>
        </div>
          
      </div>
    </header>
  );
}

export default Header;