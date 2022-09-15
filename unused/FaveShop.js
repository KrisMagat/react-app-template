import React from 'react';

const FaveShop = (props) => (
  <div className='faveShop'>
    <div id='shopName'>${props.shop.name}</div>
    <div id='shopRating'>Rating: ${props.shop.rating}</div>
    <div id='is_closed'>Currently ${props.shop.is_closed}</div>
    <div id='shopLocation'>${props.shop.location[0]}</div>
    <div id='shopLocation'>${props.shop.location[1]}</div>
    <div id='shopPhone'>${props.shop.phone}</div>
    <div id='shopUrl'>
      <a href='${props.shop.url}'>Click for details</a>
    </div>
    <button onClick={() => props.deleteShop(props.shop.id)}></button>
  </div>
);

export default FaveShop;
