import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllResorts from '../components/AllResorts.js';
// import GamePage from '../components/GamePage.js';

export default (
  <Switch>
    <Route exact path='/' component={ AllResorts }/>
    
  </Switch>
  )
// <Route exact path='/gamepage/:game_id' component={ GamePage }/>