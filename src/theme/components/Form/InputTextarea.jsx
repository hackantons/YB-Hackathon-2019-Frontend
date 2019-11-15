// @flow

import React from 'react';
import cn from 'classnames';
import { ConnectForm } from './ConnectForm.jsx';
import { uniqueId } from '@vendor/helpers.js';

type Props = {
  name: string,
  label: string,
  register: Object,
  large?: boolean,
  rows?: number,
  value?: string,
  placeholder?: string,
  className?: string,
  classNameLabel?: string,
  classNameInput?: string,
};

const Textarea = (props: Props) => {
  const [id] = React.useState(() => uniqueId(props.name));
  const [name] = React.useState(() => uniqueId(props.name, 'form'));
  return (
    <ConnectForm>
      {({ register, errors }) => (
        <div
          className={cn(
            'form__element',
            props.large ? 'form__element--large' : '',
            props.className
          )}
        >
          <label
            className={cn('form__label', props.classNameLabel)}
            htmlFor={id}
          >
            {props.label}
          </label>
          <textarea
            className={cn(
              'form__textarea',
              errors[name] ? 'form__textarea--error' : '',
              props.classNameInput
            )}
            name={name}
            id={id}
            ref={register(props.register)}
            defaultValue={props.value}
            placeholder={props.placeholder}
            rows={props.rows}
          />
          {errors[name] && (
            <span className={cn('form__error')}>{errors[name].message}</span>
          )}
        </div>
      )}
    </ConnectForm>
  );
};

Textarea.defaultProps = {
  register: {},
  large: false,
  rows: 4,
  value: '',
  placeholder: '',
  className: '',
  classNameLabel: '',
  classNameInput: '',
};

export default Textarea;
