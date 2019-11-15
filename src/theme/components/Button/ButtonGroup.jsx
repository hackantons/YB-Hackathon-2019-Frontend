// @flow

import React from 'react';
import cn from 'classnames';

import './ButtonGroup.scss';

type Props = {
  className?: string,
  children?: any,
};

const ButtonGroup = (props: Props) => {
  return (
    <div className={cn('button-group', props.className)}>{props.children}</div>
  );
};

ButtonGroup.defaultProps = {
  className: '',
  children: '',
};

export default ButtonGroup;
