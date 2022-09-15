//dependencies
import React, { Component } from 'react';
import Search from './Search';

//parent component
const Main = () => {
  return (
    <div id='main'>
      <div className='titleSearch'>
        <div id='title'>iWantBoba</div>
        <Search />
      </div>
    </div>
  );
};

export default Main;
