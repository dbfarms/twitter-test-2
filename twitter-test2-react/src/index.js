import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import rootReducer from './Reducers/Root';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  rootReducer,
  composeEnhancers()
);
// applyMiddleware(thunk) <-- add into composeenhancers() maybe later if so desired

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
   document.getElementById('root'));
registerServiceWorker();

/*

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
   document.getElementById('root'));
registerServiceWorker();

*/