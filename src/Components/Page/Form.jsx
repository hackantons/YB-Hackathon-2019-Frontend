// @flow
import React from 'react';
import cn from 'classnames';

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
} from '@theme';

export default ({ className }: { className: string } = '') => {
  const [formProcessing: boolean, setFormProcessing] = React.useState(false);
  const [error: string, setError] = React.useState('');
  // uses https://react-hook-form.com/
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
          name="name"
          label="Name"
          placeholder="Muster"
          register={{ required: 'This field is required' }}
        />
        <InputText
          name="vorname"
          label="Vorname"
          placeholder="Max"
          register={{
            required: 'This field is required',
            minLength: {
              value: 11,
              message: 'At least 11 characters',
            },
          }}
        />
        <InputText
          name="email"
          label="Email"
          placeholder="max.muster@mail.com"
          register={{
            required: 'This field is required',
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'has to be an Email',
            },
          }}
          type="email"
          large
        />
      </FormFieldset>
      <FormFieldset legend="About">
        <InputTextarea
          name="about"
          label="About me"
          placeholder="Hallo"
          register={{ required: 'This field is required' }}
          value="hallo welt"
          rows={10}
          large
        />
      </FormFieldset>
      <FormFieldset>
        <InputSelect
          name="position"
          label="Position"
          placeholder="wählen"
          emptyOption={true}
          register={{ required: 'This field is required' }}
          options={{
            stuermer: 'Stürmer',
            verteidiger: 'Verteidiger',
            torhueter: 'Torhüter',
          }}
          value="verteidiger"
          large
        />
        <InputRadio
          name="radio"
          label="Radio Group"
          register={{ required: 'This field is required' }}
          elements={{
            barrage: 'Barrage',
            finalrunde: 'Finalrunde',
            meister: 'Meister',
          }}
        />
        <InputCheckboxGroup
          name="checkbox"
          label="Checkbox Group"
          elements={{
            links: 'Links',
            mitte: 'Mitte',
            rechts: 'Rechts',
          }}
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
