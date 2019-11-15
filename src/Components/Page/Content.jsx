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
  const [isLoading: boolean, setLoading] = React.useState(false);
  const click = () => {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className={cn(props.className)}>
      <div className="content">
        <Stream />
      </div>
    </div>
  );
};
