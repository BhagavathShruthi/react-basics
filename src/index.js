import React from 'react';
import ReactDOM from 'react-dom';
import App from './ReduxFolder/Containers/App';

import { Provider } from 'react-redux';
import store from './ReduxFolder/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
