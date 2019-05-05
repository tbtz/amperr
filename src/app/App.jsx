import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage/LandingPage';
import BrowserHistory from '../services/BrowserHistory/BrowserHistory';
import Nav from '../components/Nav/Nav';

import './App.scss';

import './Fonts.scss';
import './Grid.scss';

export default class App extends Component {
  render() {
    return (
      <Router history={BrowserHistory}>
        <div className="app">
          <main>
            <Nav />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <LandingPage />}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}