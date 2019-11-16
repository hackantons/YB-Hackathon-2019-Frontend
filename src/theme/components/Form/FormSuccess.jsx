// @flow

import React, { type Node } from 'react';
import cn from 'classnames';

type Props = {
  className?: string,
  childen?: Node,
};

const FormSuccess = (props: Props) => {
  return (
    <p className={cn('form__feedback-success', props.className)}>
      {props.children}
    </p>
  );
};

export default FormSuccess;
