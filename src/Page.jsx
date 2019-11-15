// @flow
import React from 'react';
import cn from 'classnames';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Page.scss';

import Content from './Components/Page/Content.jsx';
import Form from './Components/Page/Form.jsx';
import DataViz from './Components/Page/DataViz.jsx';

import { idb, uuidv4 } from './store/idb';

export default () => {
  const [user, setUser] = React.useState('');
  React.useEffect(() => {
    idb.get('userKey').then(resp => {
      if (resp) {
        setUser(resp);
      } else {
        const id = uuidv4();
        idb.set('userKey', id);
        setUser(id);
      }
    });
  });

  if (user === '') {
    return (
      <div className="page-loading">
        <div className="page-loading__loader" />
      </div>
    );
  }

  return (
    <Router>
      <div className="page">
        <header className="page__header">
          <img src="static/img/bscyb-logo.png" alt="BSCYB Logo" />
        </header>
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
        <Switch>
          <Route path="/profile">
            <Form />
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
  );
};
