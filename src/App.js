import React, { Component } from 'react';
import {BrowserRouter, Route, Switch}  from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BrowsePage from './components/BrowsePage/BrowsePage.js'
import AppHeader from './components/Header/Header.js'
import Error from './components/Error/Error.js'
import RegisterPage from './components/RegisterPage/RegisterPage.js'
import SignInPage from './components/SignInPage/SignInPage.js'
import HelpPage from './components/HelpPage/HelpPage.js'
import ArtistPage from './components/ArtistPage/ArtistPage.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppHeader/>
          <Switch>
            <Route path = '/' component = {BrowsePage} exact/>
            <Route path = '/signin' component = {SignInPage} />
            <Route path = '/help' component = {HelpPage} />
            <Route path = '/register' component = {RegisterPage} />
            <Route path = '/artist/:id' id = ':id' component = {ArtistPage} />
            <Route component = {Error} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
