// @flow
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from '@theme';

import './Coins.scss';

export default ({ className }: { className: string } = '') => {
  return (
    <div className={cn(className, 'coins')}>
      <h2 className="coins__heading">
        1898{' '}
        <span className="coins__heading--small">
          YB
          <br /> Coins
        </span>
      </h2>
      <div className="coins__offer">
        <img
          className="coins__offer-img"
          src="https://placehold.co/100x100"
          alt="Placeholder"
        />
        <div className="coins__offer-content">
          <h5>Fan Shop Upgrade</h5>
          <p>Hol dir dein signiertes Trikot im Fan Shop.</p>
          <span className="offer__costs">noch 2 YB Coins</span>
          <Icon icon="mdi/arrow-right" />
        </div>
      </div>
      <div className="coins__offer">
        <img
          className="coins__offer-img"
          src="https://placehold.co/100x100"
          alt="Placeholder"
        />
        <div className="coins__offer-content">
          <h5>Grüsse deine Freunde</h5>
          <p>Sende einen Gruss von der Videoleinwand.</p>
          <span className="offer__costs">200 YB Coins</span>
          <Icon icon="mdi/arrow-right" />
        </div>
      </div>
      <Link to="/profile" className="coins__referrer">
        alle Angebote einsehen
      </Link>
    </div>
  );
};
