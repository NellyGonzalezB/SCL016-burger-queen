/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';

import Waiter from './components/Waiter';
import Drinks from './components/Drinks';
import HeaderKitchen from './components/HeaderKitchen';
import Kitchen from './components/Kitchen';

const App = () => (
  <Router>
    <div className="background">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/lunch">
          <Header />
          <div className="waiter-container">
            <Waiter />
          </div>
        </Route>
        <Route path="/drinks">
          <Header />
          <Drinks />
        </Route>
        <Route path="/kitchen">
          <HeaderKitchen />
          <Kitchen />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
