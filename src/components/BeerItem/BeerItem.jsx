import React, { useState } from 'react';
import { FaBan } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BeerItem = (props) => {
    const navigate = useNavigate();

    /* Hover effect */
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div 
          className='beer-item' 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut}
        >
            <div className='beer-item__img' style={{backgroundImage: `url(${props.beer.image_url})`}}>
                { props.beer.image_url === null && <FaBan /> }
            </div>
            <h2 className='beer-item__title'> { props.beer.name } 
                <span>(brewed on {props.beer.first_brewed} )</span>
            </h2>
            <p className='beer-item__price'>${props.beer.ibu}</p>
            { isHovering && (
                <div className='beer-item__on-hover'>
                   <p><button onClick={()=> navigate(`/beer-store-app/beer/${props.beer.id}`)}> 
                    View 
                    </button></p>
                </div>
            )}
        </div>
    )
}

export default BeerItem;