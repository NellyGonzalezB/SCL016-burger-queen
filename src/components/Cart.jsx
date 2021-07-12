/* eslint-disable react/no-array-index-key */
import React from 'react';

import CartItem from './CartItem';

const Cart = ({ cart, fxdelete }) => {
  const reducer = (accumulator, curr) => parseInt(accumulator, 10) + parseInt(curr, 10);
  let total = 0;

  if (cart.length) {
    total = cart
      .map((data) => data.price)
      .reduce(reducer);
  }

  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return cart.length
  && (
  <div className="order-list">
    <h1>PEDIDOS</h1>
    <hr className="line" />
    { cart.map((data, key) => (
      <div key={key}>
        <CartItem
          name={data.name}
          price={numberWithCommas(data.price)}
          id={data.id}
          remove={fxdelete}
        />
      </div>
    ))}
    <div>
      <hr />
      <h2>
        TOTAL: $
        {numberWithCommas(total)}
      </h2>
    </div>
  </div>
  );
};

export default Cart;
