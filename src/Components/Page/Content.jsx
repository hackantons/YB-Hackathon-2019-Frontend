// @flow
import React from 'react';
import cn from 'classnames';

import { Button, ButtonGroup, Icon } from '@theme';
import Stream from '../Stream/Stream.jsx';

import './Content.scss';

type Props = {
  className: string,
};

export default (props: Props) => {
  const [count, setCount] = React.useState(1);

  return (
    <div className={cn(props.className)}>
      <div className="content">
        <Stream />
      </div>
    </div>
  );
};
