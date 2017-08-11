import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import WebFontLoader from 'webfontloader';
import App from './app';
import reducer from './reducers';
import './index.scss';

WebFontLoader.load({
  google: { 
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
});

const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root')
);
