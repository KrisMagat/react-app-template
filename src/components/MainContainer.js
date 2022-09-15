//dependencies
import React, { Component } from 'react';

//child components
import Favorites from './Favorites';

//parent component
const MainContainer = () => {
  //render
  console.log('Main Container loaded');

  return (
    <div id='mainDiv'>
      <h1>BobaFinder</h1>
      <div id='favDiv'>
        <Favorites />
      </div>
      <div id='yelpDiv'>{/* <YelpContainer className='yelp' /> */}</div>
    </div>
  );
};

export default MainContainer;
