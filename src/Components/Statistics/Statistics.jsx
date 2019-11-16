// @flow
import React from 'react';
import cn from 'classnames';

import Match from './Match.jsx';
import Radio from './Radio.jsx';
import MatchInfo from './MatchInfo.jsx';
import LeaderBoard from './LeaderBoard.jsx';
import LiveStream from './LiveStream.jsx';

import PlayerOverview from './Player/Overview.jsx';
import PlayerSingle from './Player/Single.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default (props: Props) => {
  return (
    <div className="statistics">
      <Match />
      <nav className="content__navigation">
        <Link to="/statistics" className="content__navigation-element">
          Übersicht
        </Link>
        <Link to="/statistics/player" className="content__navigation-element">
          Spieler
        </Link>
        <Link to="/statistics/fans" className="content__navigation-element">
          Fans
        </Link>
      </nav>
      <Switch>
        <Route path="/statistics/player/player1">
          <PlayerSingle />
        </Route>
        <Route path="/statistics/player">
          <PlayerOverview />
        </Route>
        <Route path="/statistics/fans">
          <h1>404</h1>
        </Route>
        <Route path="/">
          <React.Fragment>
            <Radio />
            <LiveStream />
            <MatchInfo />
            <LeaderBoard />
          </React.Fragment>
        </Route>
      </Switch>
    </div>
  );
};
