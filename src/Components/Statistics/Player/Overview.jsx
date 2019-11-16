// @flow
import React from 'react';
import cn from 'classnames';

import './Overview.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Icon } from '@theme';

export default (props: Props) => {
  const [switched, toggleSwitch] = React.useState(false);

  return (
    <div className="section section--playeroverview">
      <div className="playeroverview">
        <img
          className="playeroverview__field"
          src="/static/img/statistics/field.png"
        />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
          <Link
            to="/statistics/player/player1"
            className={`playeroverview__player playeroverview__player--${i}`}
            key={i}
          >
            <img src="/static/img/statistics/player.png" />
            <span className="playeroverview__player-name">NSAME</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
