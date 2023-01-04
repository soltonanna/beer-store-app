import React from 'react';
import BeerItem from '../BeerItem/BeerItem';
import Loader from '../UI/Loader/Loader';

const SimilarItems = ({ beersData, isLoading, isError }) => {
    return (
        <div className='container similar-items'>
            <h2>Maybe you also like:</h2>
            
            { isLoading && <Loader /> }

            { isError && <h1 className="error-message">{`Something is wrong: "${isError}"`}</h1> }

            <div>
                {
                    beersData.map( beer =>
                        <BeerItem 
                            key={beer.id}
                            beer={beer}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default SimilarItems;