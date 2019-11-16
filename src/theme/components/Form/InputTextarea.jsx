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
  onKeyPress?: Function,
};

const Textarea = (props: Props) => {
  const [id] = React.useState(() => uniqueId(props.name));
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
              errors[props.name] ? 'form__textarea--error' : '',
              props.classNameInput
            )}
            name={props.name}
            id={id}
            ref={register(props.register)}
            defaultValue={props.value}
            placeholder={props.placeholder}
            rows={props.rows}
            onKeyPress={e => props.onKeyPress(e)}
          />
          {errors[props.name] && (
            <span className={cn('form__error')}>
              {errors[props.name].message}
            </span>
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
