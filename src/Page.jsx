// @flow
import React from 'react';
import cn from 'classnames';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Page.scss';

import Content from './Components/Page/Content.jsx';
import Form from './Components/Page/Form.jsx';
import DataViz from './Components/Page/DataViz.jsx';

export default () => {
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
          <Link to="/form" className="page__navigation-element">
            Form
          </Link>
          <Link to="/data" className="page__navigation-element">
            Data visualization
          </Link>
        </nav>
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/data">
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
