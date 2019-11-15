// @flow

import React from 'react';
import cn from 'classnames';

export default ({ className }: { className: string } = '') => {
  return (
    <div className={cn(className, 'partner')}>
      <p>Partner</p>
    </div>
  );
};
