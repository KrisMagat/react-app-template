import React from 'react';

const Shop = (props) => (
  <div id='shopCard'>
    <div id='shopName'>{props.shop.name}</div>
    <div id='shopRating'>
      <img
        id='yelplogo'
        src='https://brandpalettes.com/wp-content/uploads/2022/08/Yelp-Logo-300x121.png?ezimgfmt=ng:webp/ngcb1'
      />{' '}
      <span>rating: {props.shop.rating}</span>
    </div>
    <div id='status'>{props.shop.status}</div>
    <div id='addressDiv'>
      <a
        href={
          'https://maps.google.com/?q=' +
          props.shop.street_add +
          ' ' +
          props.shop.city_state
        }
      >
        <div>
          <img
            id='google'
            src='https://cdn-icons-png.flaticon.com/512/3253/3253253.png'
          />
        </div>
        <div id='location'>
          <div >{props.shop.street_add}</div>
          <div >{props.shop.city_state}</div>
        </div>
      </a>
    </div>
    <div id='shopPhone'>{props.shop.phone}</div>
    <div id='shopUrl'>
      <a href={props.shop.url}>Click for details</a>
    </div>
  </div>
);

export default Shop;
