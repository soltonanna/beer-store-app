import React, { useState, useEffect, useContext, useRef } from 'react';

import { useFetching } from '../../hooks/useFetching';
import { useSearch } from '../../hooks/useSearch';
import { useObserver } from '../../hooks/useObserver';

import BeersService from '../../api/BeersService';
import AuthContext from '../../context/context';

import BeerList from '../../components/BeerList';
import Filters from '../../components/UI/Filters/Filters';
import Loader from '../../components/UI/Loader/Loader';


const Home = () => {
    const { accessTokens } = useContext(AuthContext);

    const [beersData, setBeersData] = useState([]);
    const [beersFilteredData, setBeersFilteredData] = useState([]);

    /** For filters and search */
    const [search, setSearch] = useState({ query: '' });
    const [dateStrBefore, setDateStrBefore] = useState('');
    const [dateStrAfter, setDateStrAfter] = useState('');

    /** For pagination */
    const [limit] = useState(9);
    const [page, setPage] = useState(1);

    /** Get Main Data */
    const [fetchBeersList, isLoading, isError] = useFetching( async () => {
      const response = await BeersService.beers_api(accessTokens, limit, page);
      setBeersData([...beersData, ...response.data]);
    });
    useEffect( ()=> {
      fetchBeersList();
    },[limit, page]);

    /** Get Filtered Data */
    const [fetchFilteredBeers] = useFetching( async () => {
      const response = await BeersService.filter_api(accessTokens, dateStrBefore, dateStrAfter);
      setBeersFilteredData([...response.data]);
    });
    useEffect( ()=> { 
      fetchFilteredBeers();
    },[dateStrBefore, dateStrAfter]);

    /** Search */
    const searchedBeers = useSearch(
      beersFilteredData.length === 0 ? beersData : beersFilteredData, 
      search.query
    );

    /** Lazy Load */
    const lastElement = useRef();
    useObserver(lastElement, true, isLoading, () => {
      if (searchedBeers.length > 0 && searchedBeers.length >= limit) {
        setPage(page + 1);
      } 
    });

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
        
        <div ref={lastElement} style={{height:20}}></div>

        { isLoading && <Loader /> }

      </main>
    );
}

export default Home;