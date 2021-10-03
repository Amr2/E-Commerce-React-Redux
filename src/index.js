import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureAppStore } from './store';
import { Provider } from 'react-redux';

// Amr

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureAppStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
