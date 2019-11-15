// @flow

import React, { type Node } from 'react';
import cn from 'classnames';
import useForm, { useFormContext, FormContext } from 'react-hook-form';

import './Form.scss';

type Props = {
  onSubmit: Function,
  className?: string,
  childen?: Node,
};

const Form = ({ onSubmit, className, children, ...rest }: Props) => {
  const methods = useForm();
  return (
    <FormContext {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn(className, 'form')}
        {...rest}
      >
        {children}
      </form>
    </FormContext>
  );
};

export default Form;
