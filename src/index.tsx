import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout } from './containers/Layout';

import { store } from './store';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </Router>
  </Provider>
);
