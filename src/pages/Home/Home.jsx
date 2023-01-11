import React, { useState, useEffect, useContext, useCallback } from 'react';

import { useSearch } from '../../hooks/useSearch';

import { beers_api, filter_api } from '../../api/BeersService';
import AuthContext from '../../context/context';

import BeerList from '../../components/BeerList';
import Filters from '../../components/UI/Filters/Filters';
import Loader from '../../components/UI/Loader/Loader';

const Home = () => {
    const { accessTokens } = useContext(AuthContext);

    const [beersData, setBeersData] = useState([]);
    const [beersFilteredData, setBeersFilteredData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');

    /** For filters and search */
    const [search, setSearch] = useState({ query: '' });
    const [dateStrBefore, setDateStrBefore] = useState('');
    const [dateStrAfter, setDateStrAfter] = useState('');

    /** For pagination */
    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(true);

    /** Get Main Data */
    const fetchBeersList = useCallback(() => {
      if (isFetching) {
        beers_api(accessTokens, limit, page)
          .then(response => {
            setBeersData([...beersData, ...response]);
            setPage(prev => prev + 1);
          })
          .catch(error => {
            setIsError(error.message);
          })
          .finally(()=> {
            setIsLoading(false);
            setIsFetching(false)
          });
      } 
    }, [ beersData, isFetching, accessTokens, limit, page ]);

    useEffect(() => {
      fetchBeersList();
    }, [fetchBeersList]);

    /** Get Filtered data by dates */
    const fetchFilteredBeers = useCallback(() => {
      filter_api(accessTokens, dateStrBefore, dateStrAfter)
        .then(response => {
          setBeersFilteredData([...response]);
        })
        .catch(error => {
          setIsError(error.message);
        })
        .finally(()=> {
          setIsLoading(false);
        }); 
    }, [accessTokens, dateStrBefore, dateStrAfter ]);

    useEffect(() => {
      fetchFilteredBeers();
    }, [fetchFilteredBeers]);

    /** Search */
    const searchedBeers = useSearch(
      beersFilteredData.length === 0 ? beersData : beersFilteredData, 
      search.query
    );

    /** Lazy Load */
    useEffect(() => {
      const handlerScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
        if ( scrollHeight - currentHeight < 500) {
          setIsFetching(true);
          setIsLoading(true);
          setLimit(18);
        }
      }
      window.addEventListener('scroll', handlerScroll);
      return ()=> window.removeEventListener("scroll", handlerScroll);
    },[page]);

    // const lastElement = useRef();
    // useObserver(lastElement, true, isLoading, () => {
    //   if (searchedBeers.length > 0 && searchedBeers.length >= limit) {
    //     setPage(page + 1);
    //   } 
    // });

    // console.log("limit = ", limit);
    // console.log("data = ", beersData);

    return (
      <main className='page page__home'>
        
        <div className='filters-main-block'>
          <div className='container'>
            
            <Filters 
              search={search} 
              setSearch={setSearch}

              dBefore={dateStrBefore}
              setBefore={setDateStrBefore}

              dAfter={dateStrAfter} 
              setAfter={setDateStrAfter}
            /> 

          </div>
        </div>

        { isError && <h1 className="error-message">{`Something is wrong: "${isError}"`}</h1> }

        <BeerList beersData={searchedBeers} />
        
        {/* <div ref={lastElement} style={{height:20}}></div> */}

        { isLoading && <Loader /> }

      </main>
    );
}

export default Home;