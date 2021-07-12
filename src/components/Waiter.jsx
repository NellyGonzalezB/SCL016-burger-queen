/* eslint-disable no-shadow */
import React, { useState } from 'react';
import menu from './menu.json';
import Product from './Product';
import Cart from './Cart';

const Waiter = () => {
  const [lunch] = useState(menu);
  const [actualFilter, changeFilter] = useState('Food');
  const [cart, addToCart] = useState([]);
  const [totalProducts, plusProduct] = useState(0);

  const changeCart = (name, price) => {
    addToCart((oldArray) => [...oldArray, { name, price, id: totalProducts }]);
    plusProduct(totalProducts + 1);
  };

  const deleteBtn = (id) => {
    const filtItem = cart.filter((product) => product.id !== id);
    addToCart(filtItem);
  };

  return (
    <div className="lunch-container">
      <div className="boxMenu">
        <div className="categories">
          <button className="btn-secondary" type="button" onClick={() => changeFilter('Food')}>Almuerzos</button>
          <button className="btn-secondary" type="button" onClick={() => changeFilter('Drink')}>Bebestibles</button>
        </div>
        <div className="lunch">
          {
          lunch.koreanMenu.filter((menu) => menu.type === actualFilter).map((item, key) => {
            const {
              name, price, images,
            } = item;
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={`${name}-${key}`}>
                <Product
                  name={name}
                  price={price}
                  image={images}
                  totalProducts={totalProducts}
                  plusProduct={plusProduct}
                  changeCart={changeCart}
                  id={totalProducts}
                />
              </div>
            );
          })
        }
        </div>
      </div>
      <Cart
        cart={cart}
        fxdelete={deleteBtn}
      />
    </div>
  );
};

export default Waiter;
