import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import roleReducer from './store/reducers/role';
import scoreReducer from './store/reducers/score';
import langReducer from './store/reducers/lang';
import questionsReducer from './store/reducers/questions';
import uiReducer from './store/reducers/ui';

const rootReducer = combineReducers({
  roleReducer:  roleReducer,
  scoreReducer:  scoreReducer,
  langReducer:  langReducer,
  questionsReducer:  questionsReducer, 
  uiReducer:  uiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);