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
      <h2>Die besten Deals.</h2>
      <h3>Von deinen YB Partnern</h3>
      <Partner className="profile-data__partner" />
    </div>
  );
};
