import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { createStore, applyMiddleware, compose } from 'redux'
//import { Provider } from 'react-redux'
//import reducer from './reducers'

/*const store = createStore(
  reducer
)*/

ReactDOM.render(
    <App />,
  document.getElementById('root'));
registerServiceWorker();
