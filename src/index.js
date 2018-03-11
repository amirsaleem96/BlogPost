import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PostsIndex from './containers/PostsIndex';
import PostNew from './components/post_new';
import reducers from './reducers';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path = '/posts/new' component = { PostNew } />
        <Route path = '/' component = { PostsIndex }/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
