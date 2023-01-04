import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav id="navbar">
            <div id="navbar__links">
                <Link to="/beer-store-app">Home</Link>
                <Link to="/beer-store-app/shop"> Shop </Link>
                <Link to="/beer-store-app/our-beer"> Our Beer </Link>
                <Link to="/beer-store-app/our-story"> Our Story </Link>
                <Link to="/beer-store-app/contact"> Contact </Link>
            </div>
        </nav>
    )
}

export default Navbar;