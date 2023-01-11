import React from 'react';
import { FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='social-icons'>
            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                <FaInstagram size={22} />
            </a>
            <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                <FaFacebookSquare size={20} />
            </a>
            <a href='https://twitter.com/?lang=en' target='_blank' rel="noreferrer">
                <FaTwitter size={22} />
            </a>
        </div>
    )
}

export default SocialMedia;