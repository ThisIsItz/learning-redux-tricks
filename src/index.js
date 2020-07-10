import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstApp from './FirstApp';
import SecondApp from './SecondApp'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createStore } from 'redux'
import AllReducers from './Reducers/index'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <div>
        <Link to="/App1">App 1</Link>
      </div>
      <div>
        <Link to="/App2">App 2</Link>
      </div>
    </div>
    <Switch>
      <Route path="/App1" component={FirstApp}></Route>
      <Route path="/App2" component={SecondApp}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// Store 
const store = createStore(AllReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// Actions
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

const text = () => {
  return {
    type: 'TEXT'
  }
}

