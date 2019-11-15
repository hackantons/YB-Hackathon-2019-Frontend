// @flow
import React from 'react';
import cn from 'classnames';

import { Auth } from 'aws-amplify';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Page.scss';

import Onboarding from './Components/Auth/Onboarding.jsx';
import Content from './Components/Page/Content.jsx';
import Profile from './Components/Profile/index.jsx';
import DataViz from './Components/Page/DataViz.jsx';
import { connect } from 'react-redux';
import { updateUserId, updateUserGroup } from '@redux/actions';

import { Loader } from '@theme';

const App = ({ user }) => {
  return (
    <div className="page">
      <header className="page__header">
        <div className="page__header-logo">
          <img src="static/img/bscyb-logo.png" alt="BSCYB Logo" />
        </div>
      </header>
      {user.group === '' || user.id === '' ? (
        <Onboarding className="page__main" />
      ) : (
        <Router>
          <nav className="page__navigation">
            <Link to="/" className="page__navigation-element">
              Home
            </Link>
            <Link to="/profile" className="page__navigation-element">
              Profil
            </Link>
            <Link to="/live" className="page__navigation-element">
              Live
            </Link>
          </nav>
          <div className="page__content">
            <Switch>
              <Route path="/profile">
                <Profile user={user} />
              </Route>
              <Route path="/live">
                <DataViz />
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
