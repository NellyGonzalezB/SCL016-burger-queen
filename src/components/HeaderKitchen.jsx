/* eslint-disable no-return-assign */
/* eslint-disable arrow-body-style */
import React from 'react';

const HeaderKitchen = () => {
  return (
    <div className="header-container">
      <div>
        <h1>
          COCINA
        </h1>
      </div>
      <div>
        <button className="return-btn" type="button" onClick={() => window.location.href = 'http://localhost:3000/'}>
          <img src="https://i.ibb.co/ZdR2ZG0/back.png" alt="return-img" />
        </button>
      </div>
    </div>
  );
};

export default HeaderKitchen;
