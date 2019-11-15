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
import Statistics from './Components/Page/Statistics.jsx';
import { Loader } from '@theme';

import { idb, uuidv4 } from './store/idb';

export default () => {
  const [user, setUser] = React.useState('test');

  return (
    <div className="page">
      <header className="page__header">
        <div className="page__header-logo">
          <img src="static/img/bscyb-logo.png" alt="BSCYB Logo" />
        </div>
      </header>
      {user === '' && <Onboarding />}
      {user !== '' && (
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
                <Profile />
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
