import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import nextSlide from './reducers';
import {createStore} from 'redux';

const store = createStore(nextSlide);

ReactDOM.render(
  <App
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
);
