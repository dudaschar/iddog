import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css'
import Feed from './pages/feed/Feed'
import Auth from './pages/auth/Auth'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <BrowserRouter>
        <Feed />
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();