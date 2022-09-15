//dependencies
import React, { Component, useState } from 'react';
import FaveShop from './FaveShop';

//login/signup box
const Favorites = () => {
  console.log('Favorites loaded');
  // if (!sessionStorage.username) return;
  //what information do I need??
  //how do I render this information?
  //Need to use hooks here
  //Need to check if logged in (use session cookies)

  //helper function to get list of user's favorite shops
  const getShops = () => {
    //localhost:3000/user/shop/[username]
    //username is stored in sessionStorage.username
    //fetch call to db
    fetch(`/user/shop/${sessionStorage.username}`)
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
        const { id, name, rating, is_closed, location, display_phone, url } =
          shopInfo;
        return shopInfo;
      })
      .catch((err) => console.log(err));
  };

  //helper function to delete shop from user favorites
  const deleteShop = (shop) => {
    //localhost:3000/user/shop/req.query
    //username is stored in sessionStorage.username
    //fetch call to db
    fetch(
      `/user/shop?username=${sessionStorage.username}&shopId=${shop.shopId}`,
      { method: 'DELETE' }
    )
      .then((data) => {
        console.log(data.favorites);
        setState(data.favorites);
      })
      .catch((err) => console.log(err));
  };

  //check if logged in before proceeding
  if (sessionStorage.username) {
    document.getElementById('loginPage').style.zIndex = '0';

    //declare states for user favorites
    const [shops, setShops] = useState(getShops());

    sessionStorage.shops = shops;
    //build shops list
    let faveShops;
    if (shops.length > 0) {
      faveShops = shops.map((shopId, i) => {
        const shop = getShopDetails(shopId);
        return <FaveShop key={i} shop={shop} deleteShop={deleteShop} />;
      });
    }

    //render
    return (
      <div className='favorites'>
        <h2>Favorites</h2>
        {faveShops}
      </div>
    );
  }
};

export default Favorites;
