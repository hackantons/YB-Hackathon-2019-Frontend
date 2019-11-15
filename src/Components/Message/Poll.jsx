// @flow
import React from 'react';
import cn from 'classnames';

import { Icon } from '@theme';

import Poll from '../Message/Poll.jsx';

export default (props: Props) => {
  return (
		<div className="poll message__poll">
			<div className=""><Icon icon="mdi/thumb-up" /></div>
			<div className=""><Icon icon="mdi/thumb-down" /></div>
		</div>
  );
};
