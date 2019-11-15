// @flow

import React from 'react';
import cn from 'classnames';
import { ConnectForm } from './ConnectForm.jsx';
import { uniqueId } from '@vendor/helpers.js';

type Props = {
  name: string,
  label: string,
  register: Object,
  options: Object,
  large?: boolean,
  value?: string,
  placeholder?: string,
  emptyOption?: boolean,
  className?: string,
  classNameLabel?: string,
  classNameInput?: string,
};

const Select = (props: Props) => {
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
          <span className="form__select-wrapper">
            <select
              className={cn(
                'form__select',
                errors[name] ? 'form__select--error' : '',
                props.classNameInput
              )}
              name={name}
              id={id}
              ref={register(props.register)}
              defaultValue={props.value}
            >
              {props.emptyOption && (
                <option value="" disabled>
                  {props.placeholder}
                </option>
              )}
              {Object.entries(props.options).map(([key, text]) => (
                <option key={key} value={key}>
                  {text}
                </option>
              ))}
            </select>
          </span>
          {errors[name] && (
            <span className={cn('form__error')}>{errors[name].message}</span>
          )}
        </div>
      )}
    </ConnectForm>
  );
};

Select.defaultProps = {
  register: {},
  large: false,
  emptyOption: false,
  value: '',
  placeholder: '',
  className: '',
  classNameLabel: '',
  classNameInput: '',
};

export default Select;
