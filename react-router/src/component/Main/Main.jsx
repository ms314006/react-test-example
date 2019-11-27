import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav';
import Home from '../Home';
import News from '../News';

const Main = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route path="/news" component={() => <News />} />
    </Switch>
  </div>
);

export default Main;
