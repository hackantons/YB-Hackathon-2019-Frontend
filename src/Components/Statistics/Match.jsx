// @flow
import React from 'react';
import cn from 'classnames';

import './Match.scss';

export default (props: Props) => {
  return (
    <div className="section section--match">
      <div className="match">
        <div className="match__inner">
          <div className="match__head">
            <h5>Raiffeisen Super League</h5>
            <p>16.11.2019</p>
          </div>
          <div className="match__content">
            <div className="match__home-team">
              <img
                src="/static/img/stream/logo-yb@2x.png"
                className="match__home-team-img"
                alt={'YB'}
              />
              <p>BSC YB</p>
            </div>
            <div className="match__score">
              <span className="match__score-home">0</span>
              <span className="match__score-divider">:</span>
              <span className="match__score-guest">0</span>
            </div>
            <div className="match__guest-team">
              <img
                src="/static/img/stream/logo-yb_1@2x.png"
                className="match__guest-team-img"
                alt={'FCZ'}
              />
              <p>FC Zürich</p>
            </div>
          </div>
        </div>
        <div className="match__background"></div>
      </div>
    </div>
  );
};
