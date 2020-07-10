import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstApp from './FirstApp';
import SecondApp from './SecondApp'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux';
import { setAppType } from './actions';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <button onClick={() => store.dispatch(setAppType('1'))}>App 1</button>
    <button onClick={() => store.dispatch(setAppType('2'))}>App 2</button>
    <FirstApp />
  </Provider>,
  document.getElementById('root')
);

// Store 


