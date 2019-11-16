// @flow

import React from 'react';
import cn from 'classnames';

import ProfileData from './ProfileData.jsx';
import Coins from './Coins.jsx';
import Partner from './Partner.jsx';

import type { User } from '@vendor/types';

export default (
  { className, user }: { className: string, user: User } = ''
) => {
  return (
    <div className={cn(className, 'profile-data')}>
      <h2>Profil</h2>
      <ProfileData className="profile-data__form" />
      <div className="section section--bkg-yellow section--oblique-right">
        <Coins className="profile-data__coins" />
      </div>
      <div className="section profile-data__partner-section">
        <h1>Die besten Deals.</h1>
        <h2>Von deinen YB Partnern</h2>
        <div className="profile-data__partner-desc">
          <h2>Überraschung</h2>
          <p>
            Irgendwann während dem Spiel gibt es für 10 Minuten ein limitiertes
            Angebot. Sei bereit
          </p>
        </div>
      </div>
      <Partner className="profile-data__partner" />
    </div>
  );
};
