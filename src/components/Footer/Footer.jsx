import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt, FaRegCopyright } from 'react-icons/fa';
import SocialMedia from '../UI/SocialMedia';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div>
          <h3>useful</h3>
          <ul>
            <li><Link to="/beer-store">Home</Link></li>
            <li><Link to="/beer-store/shop">Shop</Link></li>
            <li><Link to="/beer-store/our-story">Our Story</Link></li>
            <li><Link to="/beer-store#">Blog</Link></li>
            <li><Link to="/beer-store#">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3>help</h3>
          <ul>
            <li>customer service</li>
            <li>find our beer</li>
            <li>recent orders</li>
            <li>contact</li>
            <li>terms & privacy</li>
          </ul>
        </div>

        <div>
          <h3>shop</h3>
          <ul>
            <li>pale ale</li>
            <li>golden ale</li>
            <li>dark ale</li>
            <li>IPA</li>
          </ul>
        </div>

        <div>
          <h3>our information</h3>
          <p>
            <FaMapMarkerAlt /> 
            94 River Road, London, UNited Kingdom
          </p>
          <p>
            <FaRegEnvelope />
            sales@craftbeer-nation.com
          </p>  
          <p>
            <FaPhoneAlt />
            (0)203 123 4567
          </p>
          
          
        </div>

        <div>
            <SocialMedia />
        </div>
      </div>
      <p className='container' id='copyright'>2023 <FaRegCopyright /> Craft beer Nation</p>
    </footer>
  )
}

export default Footer;