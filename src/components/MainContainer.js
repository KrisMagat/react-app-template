//dependencies
import React, { Component } from 'react';
// import { connect } from 'react-redux';

//child components
//TDB

//parent component
const MainContainer = () => {
  //render
  return (
    <div className='container'>
      <Overlay className='overlay' />
      <Favorites />
      <YelpContainer />
    </div>
  );
};

export default MainContainer;
