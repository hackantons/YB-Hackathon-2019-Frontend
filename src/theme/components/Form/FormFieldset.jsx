// @flow

import React, { type Node } from 'react';
import cn from 'classnames';

type Props = {
  className?: string,
  legend?: string,
  childen?: Node,
};

const FormFieldset = (props: Props) => {
  return (
    <div className={cn('form__fieldset', props.className)}>
      {props.legend !== '' && <h2 className="form__legend">{props.legend}</h2>}
      {props.children}
    </div>
  );
};

FormFieldset.defaultProps = {
  legend: '',
};

export default FormFieldset;
