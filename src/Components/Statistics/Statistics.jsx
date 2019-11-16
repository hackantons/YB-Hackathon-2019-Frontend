// @flow
import React from 'react';
import cn from 'classnames';

import Match from './Match.jsx';
import Radio from './Radio.jsx';
import MatchInfo from './MatchInfo.jsx';
import LeaderBoard from './LeaderBoard.jsx';
import LiveStream from './LiveStream.jsx';
import { Link } from 'react-router-dom';

export default (props: Props) => {
  return (
    <div className="statistics">
      <Match />
      <nav className="content__navigation">
        <Link
          to="/statistics"
          className="content__navigation-element content__navigation-element--active"
        >
          Übersicht
        </Link>
        <Link to="/statistics/player" className="content__navigation-element">
          Spieler
        </Link>
        <Link to="/statistics/fans" className="content__navigation-element">
          Fans
        </Link>
      </nav>
      <Radio />
      <LiveStream />
      <MatchInfo />
      <LeaderBoard />
    </div>
  );
};
