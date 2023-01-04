import React from 'react';
import Input from '../FormItems/Input';
import { DatePicker} from 'antd';
import dayjs from 'dayjs';

const SearchFilter = (props) => {

  const onChangeDateBefore = (date, dateString) => {
    const reversed = dateString.split('-').reverse().join('-')
    props.setBefore(reversed);
    props.setAfter('');
  };
  const onChangeDateAfter = (date, dateString) => {
    const reversed = dateString.split('-').reverse().join('-')
    props.setAfter(reversed);
    props.setBefore('');
  };


  return (
    <div className='search-filters'>
        <Input 
          value={props.search.query}
          onChange={e => props.setSearch({...props.search, query: e.target.value})}
          placeholder="Search..."
        />

        <div className='filter-before'>
          <span>Filter by brewed before:</span>
          <DatePicker 
            onChange={onChangeDateBefore}
            picker="month"
            defaultValue={dayjs('2015-01-01', 'YYYY-MM-DD')} 
          />
        </div>

        <div className='filter-after'>
            <span>Filter by brewed after:</span>
            <DatePicker 
              onChange={onChangeDateAfter}
              picker="month"
              defaultValue={dayjs('2015-01-01', 'YYYY-MM-DD')} 
            />
        </div>
    </div>
  )
}

export default SearchFilter;