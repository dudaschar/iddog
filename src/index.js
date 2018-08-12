import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/auth/Auth'
import Feed from './pages/feed/Feed'
import registerServiceWorker from './registerServiceWorker'

import './index.css'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/feed" component={Feed} />
    </Switch>
  </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();