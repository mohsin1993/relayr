import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as Redux } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './Redux/store';

import styles from '../styles.css';
import App from './App';

let store = configureStore();

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Redux store={store}>
        <Component />
      </Redux>
    </AppContainer>,

    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
