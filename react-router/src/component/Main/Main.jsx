import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from '../Nav';
import Home from '../Home';
import News from '../News';

const Main = () => (
  <HashRouter>
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/News" component={() => <News />} />
      </Switch>
    </>
  </HashRouter>
);

export default Main;
