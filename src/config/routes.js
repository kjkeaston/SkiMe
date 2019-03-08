import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllResorts from '../components/AllResorts.js';
import Resort from '../components/Resort.js';
import Trail from '../components/Trail.js';
import AddNewPost from '../components/AddNewPost.js';
import Profile from '../components/Profile.js';
import FAQ from '../components/FAQ.js';
import About from '../components/About.js';

export default (
  <Switch>
    <Route exact path='/' component={ AllResorts }/>
    <Route exact path='/resorts/:resort_id' component={ Resort }/>
    <Route exact path='/trails/:trail_id' component={ Trail }/>
    <Route exact path='/addreview' component= { AddNewPost } />
    <Route exact path='/profile' component= { Profile } />
    <Route exact path='/faq' component= { FAQ } />
    <Route exact path='/about' component= { About } />
  </Switch>
  )
