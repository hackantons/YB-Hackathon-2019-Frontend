// @flow

import React, { type Node } from 'react';
import cn from 'classnames';
import { ButtonGroup } from '@theme';

type Props = {
  className?: string,
  childen?: Node,
};

const FormControls = (props: Props) => {
  return (
    <ButtonGroup className={cn('form__controls', props.className)}>
      {props.children}
    </ButtonGroup>
  );
};

export default FormControls;
