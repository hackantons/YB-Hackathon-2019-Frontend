// @flow
import React from 'react';
import cn from 'classnames';

import './LiveStream.scss';

import { Icon } from '@theme';

export default (props: Props) => {
  const [switched, toggleSwitch] = React.useState(false);

  return (
    <div className="section section--livestream section--bkg-dark section--oblique-left">
      <div className="livestream">
        <h2 className="livestream__title">Live Übertragung</h2>
        <h3 className="livestream__subtitle">5 CHF / 500 YB Coins</h3>
        <div className="livestreams">
          <div className="livestreams-stream">
            <Icon icon="mdi/play-circle-outline" />
            <img
              className="lifestreams__stream-img"
              src="/static/img/statistics/logo-swisscom@2x.png"
              alt="Swisscom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
