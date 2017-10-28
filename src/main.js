import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  configureStore  from './reducers/configureStore';
 
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './Common/Main.component.js'
import Home from './Common/Home.component.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Selflearn from './selflearn.js';
const store = configureStore();

render(
<Provider store={store}>
<MuiThemeProvider>
    <Router history={browserHistory}>
        <Route component={Main}>
           <Route path="/" component={Home}/>
           <Route path="/selflearn" component={Selflearn}/>
        </Route>
    </Router></MuiThemeProvider></Provider>,
    document.getElementById('container')
);
