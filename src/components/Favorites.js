//dependencies
import React, { Component, useState } from 'react';

//login/signup box
const Favorites = () => {
  //what information do I need??
  //how do I render this information?
  //Need to use hooks here
  //Need to check if logged in (use session cookies)

  //helper function to get list of user's favorite shops
  const getShops = () => {
    //localhost:3000/user/shop/[username]
    //username is stored in sessionStorage.username
    //fetch call to db
    fetch(`/user/shop/${username}`)
      .then((data) => data.favorites)
      .catch((err) => console.log(err));
  };

  //helper function to get shop details of user's favorite shops
  const getShopDetails = (shop) => {
    //localhost:3000/api/[id]
    //username is stored in sessionStorage.username
    //fetch call to db
    fetch(`/api/${shop}`)
      .then((data) => {
        const { name, rating, is_closed, location, display_phone, url } =
          shopInfo;
        return shopInfo;
      })
      .catch((err) => console.log(err));
  };

  //declare states for user favorites
  const [shops, setShops] = useState(getShops());

  //build shops list
  //declare empty array
  const faveShops = [];
  //use for loop to iterate thru shops in state
  for (const shop of faveShops) {
    const shopInfo = getShopDetails(shop);
    `<div>WORKING HERE           </div>`;
  }

  //push new shop into empty array
  console.log('Favorites loaded');
  return (
    <div>
      <h2>Favorites</h2>
      <div>{faveShops}</div>
    </div>
  );
};

export default Favorites;
