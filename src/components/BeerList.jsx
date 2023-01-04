import React from 'react';
import BeerItem from './BeerItem/BeerItem';

const BeerList = ({ beersData }) => {
    return (
        <div className='container beer-list'>
          {
            !beersData.length 
            ?   <h1 className='error-message'>Beers not found!</h1>
            :   beersData.map((beer) => 
                    <BeerItem 
                      key={beer.id}
                      beer={beer}
                    />
                )
          }
        </div>
    )
}

export default BeerList;