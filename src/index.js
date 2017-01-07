import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import * as actions from './actions/gameActions'
import App from './App';

const store = configureStore();


const render = ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);

store.subscribe(render);
