//dependencies
import React, { Component, useState } from 'react';
import Shop from './Shop';

//login/signup box
const Search = () => {
  //declare states
  const [location, setLocation] = useState();
  const [radius, setRadius] = useState('5000');
  const [shopArray, setShopArray] = useState([]);

  //helper function to create next component
  const startSearch = () => {
    document.getElementById('searchInput').value = '';
    //cleanup location variable
    const cleanLoc = location.replace(/[ ]/g, '');
    //api call
    const url = `/api?location=${cleanLoc}&radius=${radius}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('this is data', data);
        return setShopArray(data);
      })
      .catch((err) => console.log(err));
  };

  const shopsToRender = shopArray.map((shop, i) => (
    <Shop key={i} shop={shop} />
  ));
  console.log('this one is just before render', shopsToRender);

  //render
  return (
    <div>
      <div id='search'>
        <input
          id='searchInput'
          type='text'
          placeholder='Enter Location'
          onChange={(e) => setLocation(e.target.value)}
          required='true'
        />
        <select
          className='dropdn'
          name='radius'
          onChange={(e) =>
            setRadius(e.target.options[e.target.selectedIndex].value)
          }
        >
          <option value='5000'>Within 3 miles</option>
          <option value='8000'>Within 5 miles</option>
          <option value='16000'>Within 10 miles</option>
        </select>

        <button className='searchbtn' onClick={() => startSearch()}>
          Search
        </button>
      </div>
      <div id='shopContainer'>{shopsToRender}</div>
    </div>
  );
};

export default Search;
