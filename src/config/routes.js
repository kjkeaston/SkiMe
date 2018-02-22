import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllResorts from '../components/AllResorts.js';
import Resort from '../components/Resort.js';

export default (
  <Switch>
    <Route exact path='/' component={ AllResorts }/>
    <Route exact path='/resorts/:resort_id' component={ Resort }/>
  </Switch>
  )
 