import React, { Component } from 'react';
import {BrowserRouter, Route, Switch}  from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import logo from './logo.svg';
import './App.css';
import BrowsePage from './components/BrowsePage/BrowsePage.js'
import AppHeader from './components/Header/Header.js'
import Error from './components/Error/Error.js'
import RegisterPage from './components/RegisterPage/RegisterPage.js'
import SignInPage from './components/SignInPage/SignInPage.js'
import HelpPage from './components/HelpPage/HelpPage.js'
import BrowseRow from './components/BrowseRow/BrowseRow.js'
import ArtistPage from './components/ArtistPage/ArtistPage.js'
import {fetchArt} from './action_creators/actionCreators.js'
import rootReducer from './reducers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger'

import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { ConnectedRouter } from 'connected-react-router'

const history = createBrowserHistory()
const loggerMiddleware = createLogger()

export const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
    routerMiddleware(history)
  )
)

store.dispatch(fetchArt(6)).then(() => console.log('store', store.getState()))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
        <div>
          <AppHeader/>
          <Switch>
            <Route exact path = '/' component = {BrowsePage}/>
            <Route path = '/signin' component = {SignInPage} />
            <Route path = '/help' component = {HelpPage} />
            <Route path = '/register' component = {RegisterPage} />
            <Route path = '/artist/:id' id = ':id' component = {ArtistPage} />
            <Route component = {Error} />
          </Switch>
        </div>
        </ConnectedRouter>
      </Provider>

    );
  }
}

// export default withRouter(connect()(App));
export default App;
