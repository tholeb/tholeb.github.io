import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import minifed build on production
if (process.env.NODE_ENV === 'production') {
  require('./assets/css/build.css')
} else {
  require('./assets/css/tailwind.css')
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
