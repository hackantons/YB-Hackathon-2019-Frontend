// @flow

import React from 'react';
import cn from 'classnames';
import { ConnectForm } from './ConnectForm.jsx';
import { uniqueId } from '@vendor/helpers.js';

type Props = {
  name: string,
  label: string,
  register: Object,
  type?: 'text' | 'email' | 'tel',
  large?: boolean,
  value?: string,
  placeholder?: string,
  className?: string,
  classNameLabel?: string,
  classNameInput?: string,
};

const Text = (props: Props) => {
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
          <input
            className={cn(
              'form__input',
              errors[name] ? 'form__input--error' : '',
              props.classNameInput
            )}
            name={name}
            id={id}
            ref={register(props.register)}
            defaultValue={props.value}
            placeholder={props.placeholder}
            type={props.type}
            disabled={props.disabled}
          />
          {errors[name] && (
            <span className={cn('form__error')}>{errors[name].message}</span>
          )}
        </div>
      )}
    </ConnectForm>
  );
};

Text.defaultProps = {
  register: {},
  type: 'text',
  large: false,
  value: '',
  placeholder: '',
  className: '',
  classNameLabel: '',
  classNameInput: '',
};

export default Text;
