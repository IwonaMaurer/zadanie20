import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import routes from './routes';
import { getCountries } from './actions/actions-countries';
import './country.css';

render(
    <Provider store={store}>
         <div>
         <Router history={hashHistory} routes={routes}>
    
         </Router>
         <DevTools />
     </div>
       
    </Provider>,
    document.getElementById('root')
);
