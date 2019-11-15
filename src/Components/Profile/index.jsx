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
      <ProfileData className="profile-data__form" user={user} />
      <h2>Cois</h2>
      <Coins className="profile-data__coins" />
      <h2>Partner</h2>
      <Partner className="profile-data__partner" />
    </div>
  );
};
