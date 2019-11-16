// @flow
import React from 'react';
import cn from 'classnames';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Page.scss';

import Onboarding from './Components/Auth/Onboarding.jsx';
import Content from './Components/Page/Content.jsx';
import Profile from './Components/Profile/index.jsx';

import { connect } from 'react-redux';
import Statistics from './Components/Statistics/Statistics.jsx';

const App = ({ user }) => {
  return (
    <div className="page">
      {user.group === '' || user.id === '' ? (
        <React.Fragment>
          <header className="page__header">
            <div className="page__header-logo">
              <img src="static/img/bscyb-logo.png" alt="BSCYB Logo" />
            </div>
          </header>
          <Onboarding className="page__main" />
        </React.Fragment>
      ) : (
        <Router>
          <nav className="page__navigation">
            <Link to="/profile" className="page__navigation-element">
              Profil
            </Link>
            <Link to="/" className="page__navigation-element">
              Live
            </Link>
            <Link to="/statistics" className="page__navigation-element">
              Statistiken
            </Link>
          </nav>
          <div className="page__content">
            <Switch>
              <Route path="/profile">
                <Profile user={user} />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
              <Route path="/">
                <Content />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(App);
