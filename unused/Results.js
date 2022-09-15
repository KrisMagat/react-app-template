//dependencies
import React, { Component } from 'react';

//login/signup box
const Results = () => {
  //api call to yelp
  let searchResults;
  //localhost:3000/api/
  console.log(sessionStorage.location, sessionStorage.radius);
  const url = `/api?location=${sessionStorage.location}&radius=${sessionStorage.radius}`;
  fetch(url)
    .then((response) => response.json)
    .then((data) => {
      searchResults = data;
    })
    .catch((err) => console.log(err));

  return <div>{searchResults}</div>;
};

export default Results;
