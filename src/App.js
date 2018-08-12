import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/auth/Auth'
import Feed from './pages/feed/Feed'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/feed" component={Feed} />
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));

export default App;
