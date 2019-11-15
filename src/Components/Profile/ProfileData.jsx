// @flow

import React from 'react';
import cn from 'classnames';
import type { User } from '@vendor/types';

import {
  Button,
  Form,
  FormFieldset,
  FormControls,
  FormError,
  InputText,
  InputTextarea,
  InputSelect,
  InputRadio,
  InputCheckboxGroup,
  Loader,
} from '@theme';
import { idb, uuidv4 } from '@/store/idb';

export default (
  { className, user }: { className: string, user: User } = ''
) => {
  const [formProcessing: boolean, setFormProcessing] = React.useState(false);
  const [error: string, setError] = React.useState('');

  return (
    <Form
      onSubmit={data => {
        if (error === '') {
          setError('This is an Error. Please submit again');
        } else {
          setError('');
          setFormProcessing(true);
          window.setTimeout(() => {
            setFormProcessing(false);
            alert('form submitted! Please visit the console for the output');
            console.log(data);
          }, 3000);
        }
      }}
      className={cn(className)}
    >
      <FormFieldset legend="Personal Data">
        <InputText
          name="user"
          label="User"
          register={{ required: 'This field is required' }}
          defaultValue={user.user}
          disabled
        />
        <InputText
          name="name"
          label="Name"
          register={{ required: 'This field is required' }}
          defaultValue={user.name}
        />
      </FormFieldset>
      <FormControls>
        {error !== '' && <FormError>{error}</FormError>}
        <Button
          text="Primary"
          type="submit"
          loading={formProcessing}
          style="primary"
        />
      </FormControls>
    </Form>
  );
};
