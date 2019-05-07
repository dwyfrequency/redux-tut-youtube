import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';

function productsReducer(state = [], action) {
  return state;
}

function userReducer(state = '', action) {
  switch (action.type) {
    case 'updateUser':
      return action.payload.user;
      break;

    default:
      break;
  }
  return state;
}

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
});

const store = createStore(
  allReducers,
  {
    products: [{ name: 'iPhone' }],
    user: 'Michael',
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const action = {
  type: 'changeState',
  payload: {
    newState: 'New State',
  },
};

store.dispatch(action);
console.log(store.getState());

const updateUserAction = {
  type: 'updateUser',
  payload: {
    user: 'John',
  },
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
