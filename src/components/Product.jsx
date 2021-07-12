import React from 'react';

const Product = ({
  name, price, image, changeCart, id,
}) => (
  <div className="menu-box">
    <ul>
      <li>
        <img src={image} alt={name} />
      </li>
      <div className="foodName">
        <li>
          {name}
        </li>
        <button className="style-buttonLunch" type="button" onClick={() => changeCart(name, price, id)}>
          Agregar $
          {price}
        </button>
      </div>
    </ul>
  </div>
);

export default Product;
