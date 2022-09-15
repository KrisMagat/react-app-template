import React from 'react';
import { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import MainContainer from './components/MainContainer';

const App = () => {
  //monitor session cookie
  const checkCookie = () => {
    console.log(document.getElementById('login'));
    if (sessionStorage.username) document.getElementById('login').zIndex = '0';
  };
  window.setInterval(checkCookie, 100);

  //render page
  return (
    <div>
      <div id='login'>
        <LoginPage />
      </div>
      <div>
        <MainContainer />
      </div>
    </div>
  );
};

export default App;
