/* eslint-disable no-extend-native */
import './assets/sass/master.scss';
import React, { cloneElement, isValidElement } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

declare global {
  interface Array<T> {
    rMap: (callback: (data: any, index: number) => React.ReactNode) => React.ReactNode[]
  }
}

Array.prototype.rMap = function (callback) {
  return this.map(function (data, key) {
    let cb = callback(data, key)
    if (isValidElement(cb)) {
      cb = cloneElement(cb, { key: key.toString() })
    }
    return cb
  })
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
