import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import WebFontLoader from 'webfontloader';
import AppContainer from './app-container';
import reducer from './reducers';
import './index.scss';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById('root'),
);
