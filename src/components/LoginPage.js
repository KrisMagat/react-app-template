//dependencies
import React, { Component, useState } from 'react';

//login/signup box
const LoginPage = () => {
  //what information do I need??
  //how do I render this information?
  //Need to use hooks here
  //Need to use a form here
  //Need to verify and/or create user here
  //Need to store user information in Session cookie for use by other components
  //Need to move this div out of view once logged in

  //declare useState hooks for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //login helper function
  const login = () => {
    // url = '';
    // fetch('/').then(() => {
    sessionStorage.username = username;
  };
  // //sign up helper function
  const signup = () => {
    // url = '';
    // fetch('/').then(() => {
    sessionStorage.username = username;
  };

  console.log('LoginPage loaded');
  return (
    <form className='loginForm'>
      <h1>BobaFinder</h1>
      <label className='form-entry'>
        Username:
        <input
          type='text'
          placeholder='Enter your username'
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label className='form-entry'>
        Password:
        <input
          type='text'
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <div className='login-buttons'>
        <button onClick={() => login()}>Login</button>
        <button onClick={() => signup()}>Sign Up</button>
      </div>
    </form>
  );
};

export default LoginPage;
