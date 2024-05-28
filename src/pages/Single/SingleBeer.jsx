import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { singleBeer_api, similarBeers_api } from '../../api/BeersService';

import AuthContext from '../../context/context';
import CartContext from '../../context/cart-context';

import Loader from '../../components/UI/Loader/Loader';
import AddCartForm from '../../components/UI/AddCartForm';
import Modal from '../../components/UI/Modal/Modal';
import CartItem from '../../components/CartItem/CartItem';
import SimilarItems from '../../components/SimilarItems/SimilarItems';

const SingleBeer = () => {

    const { accessTokens } = useContext(AuthContext);
    const cartCtx = useContext(CartContext);

    const [singleBeer, setSingleBeer] = useState([]);
    const [similarBeers, setSimilarBeers] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');

    const [cartIsShown, setCartIsShown] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    /** Get Data */
    const fetchBeerById = useCallback(() => {
        singleBeer_api(accessTokens, params.id)
            .then(response => {
                setSingleBeer(...response);
                setIsLoading(false);
            })
            .catch(error => {
                setIsError(error.message);
                setIsLoading(false);
            });
    }, [accessTokens, params.id]);

    useEffect(() => {
        fetchBeerById();
    }, [fetchBeerById]);


    const fetchSimilarBeers = useCallback((beerIbu, beerAbv) => {
        similarBeers_api(accessTokens, beerIbu, beerAbv)
            .then(response => {
                setSimilarBeers(response);
                setIsLoading(false);
            })
            .catch(error => {
                setIsError(error.message);
                setIsLoading(false);
            });
    }, [accessTokens]);

    useEffect(() => {
        if (singleBeer.length !== 0 ) {
            fetchSimilarBeers(Math.round(singleBeer.ibu), Math.round(singleBeer.abv));
        }
    }, [fetchSimilarBeers, singleBeer]);


    /** Add data to cart */
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            amount: amount,
            id: singleBeer.id,
            name: singleBeer.name, 
            img: singleBeer.image_url,
            price: singleBeer.ibu
        });
        setCartIsShown(true);
    }

    const hasItems = cartCtx.items.length > 0;

    /** Using this in modal */
    const cartItems = cartCtx.items.map( item => (
        <CartItem 
            key={item.id} 
            title={item.name} 
            amount={item.amount} 
            price={item.price} 
            img={item.img} 
        /> 
    ));
// TODO fix isloader, iserror,,,,
    return (
        <main className='page page__single-beer'>

            { isLoading && <Loader /> }

            { isError && <h1 className="error-message">{`Something is wrong: "${isError}"`}</h1> }
          
            {
            <>
                <div className='single-item__go-back' onClick={() => navigate(-1)}> 
                    <FaArrowLeft/> Back 
                </div>
                
                <div className='container single-item'>
            
                    <div className='single-item__img'>
                        <div style={{backgroundImage: `url(${singleBeer.image_url})`}}></div>
                    </div>
                    
                    <div className='single-item__info'>
                        <p className='beer-params'>
                            <span></span>
                            <span>{singleBeer.abv}%</span>
                        </p>

                        <h2 className='title'>{singleBeer.name}</h2>

                        <p className='description'>
                            {singleBeer.description}
                            <span>{singleBeer.brewers_tips}</span>
                        </p>

                        <p className='price'>${singleBeer.ibu}</p>

                        <div className='add-to-cart-block'>
                            <AddCartForm onAddToCart={addToCartHandler} />
                        </div>
                    </div>

                    { cartIsShown && 
                        <Modal onClick={()=> setCartIsShown(false)}>
                            {cartItems}
                            <div className='total'>
                                <span>Total Amount:</span>
                                <span>{cartCtx.totalAmount}</span>
                            </div>
                            <div className="actions">
                                <button onClick={()=> setCartIsShown(false)}>Close</button>
                                { hasItems && <button onClick={()=>navigate('/beer-store-app/cart')}>Order</button> }
                            </div>
                        </Modal>
                    } 
                </div>

                <SimilarItems beersData={similarBeers}  isLoading={isLoading} isError={isError} /> 
            </>
            }
        </main>
    )
}

export default SingleBeer;