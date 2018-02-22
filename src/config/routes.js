import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllResorts from '../components/AllResorts.js';
import Resort from '../components/Resort.js';
import Trail from '../components/Trail.js';

export default (
  <Switch>
    <Route exact path='/' component={ AllResorts }/>
    <Route exact path='/resorts/:resort_id' component={ Resort }/>
    <Route exact path='/trails/:trail_id' component={ Trail }/>
  </Switch>
  )
 