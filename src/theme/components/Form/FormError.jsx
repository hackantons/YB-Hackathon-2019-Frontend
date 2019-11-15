// @flow

import React, { type Node } from 'react';
import cn from 'classnames';

type Props = {
  className?: string,
  childen?: Node,
};

const FormError = (props: Props) => {
  return (
    <p className={cn('form__feedback-error', props.className)}>
      {props.children}
    </p>
  );
};

export default FormError;
