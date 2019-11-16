// @flow
import React from 'react';
import cn from 'classnames';

import Match from './Match.jsx';
import Radio from './Radio.jsx';
import MatchInfo from './MatchInfo.jsx';
import LeaderBoard from './LeaderBoard.jsx';

export default (props: Props) => {
  return (
    <div className="statistics">
      <Match />
      <Radio />
      <MatchInfo />
      <LeaderBoard />
    </div>
  );
};
