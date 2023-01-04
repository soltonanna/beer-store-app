import React from 'react';
import { FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='social-icons'>
            <a href='#' target='_blank'>
                <FaInstagram size={22} />
            </a>
            <a href='#' target='_blank'>
                <FaFacebookSquare size={20} />
            </a>
            <a href='#' target='_blank'>
                <FaTwitter size={22} />
            </a>
        </div>
    )
}

export default SocialMedia;