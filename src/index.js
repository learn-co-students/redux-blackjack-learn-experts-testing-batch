import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

import { resetGame, startGame } from './actions/gameActions';


ReactDOM.render(
  <Provider>
    
  </Provider>,
  document.getElementById('container')
);


