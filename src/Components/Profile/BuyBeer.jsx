// @flow

import React from 'react';
import cn from 'classnames';

import './BuyBeer.scss';
import { endpointMobile } from '@/store/amplify';
import axios from 'axios';

import {
  ShadowBox,
  Button,
  Form,
  FormFieldset,
  FormControls,
  FormError,
  FormSuccess,
  InputText,
  InputRadio,
} from '@theme/index';

export default ({ className, close }) => {
  const [formProcessing: boolean, setFormProcessing] = React.useState(false);
  const [error: string, setError] = React.useState('');
  const [success: string, setSuccess] = React.useState('');
  return (
    <ShadowBox close={() => close()}>
      <div className="buybeer">
        <div className="buybeer__desc">
          <h2>Sags mit einem Bier!</h2>
          <p>
            Du möchtest deine Freude über ein Toor ausdrücken? Dann schicke ein
            Bier ins Stadion!
          </p>
          <p>
            Die Empfängerin / der Empfänger erhält dann einen Code, den er beim
            Getränkestand einlösen kann.
          </p>
        </div>
        <Form
          onSubmit={(data, e) => {
            setFormProcessing(true);
            setError('');
            setSuccess('');
            axios
              .post(endpointMobile, {
                number: data.tel,
                message:
                  'Dein Biercode: ' + Math.floor(Math.random() * 90000) + 10000,
              })
              .then(resp => {
                setFormProcessing(false);
                e.target.reset();
                setSuccess('Juhuu! Da wird sich jemand freuen! 🍻');
              })
              .catch(() => {
                setFormProcessing(false);
                setError('Sorry, da hat was nicht geklappt..');
              });
            console.log(data);
          }}
          className={cn(className, 'buybeer__form')}
        >
          <FormFieldset>
            <InputText
              name="tel"
              label="Handynummer"
              register={{
                required: 'Das ist ein Pflichtfeld',
                pattern: {
                  value: /\+([0-9]{11})$/,
                  message:
                    'Das Feld muss eine valide Handynummer sein (z.B. +41790000000)',
                },
              }}
              large
            />
            <InputRadio
              name="zahlungsart"
              label="CHF 6.- Zahlen über"
              register={{ required: 'Das ist ein Pflichtfeld' }}
              elements={{
                twint: 'Twint',
                paypal: 'PayPal',
                stripe: 'Stripe',
              }}
              large
            />
          </FormFieldset>
          <FormControls>
            {error !== '' && <FormError>{error}</FormError>}
            {success !== '' && <FormSuccess>{success}</FormSuccess>}
            <Button
              text="Jetzt bestellen"
              type="submit"
              loading={formProcessing}
              style="primary"
            />
          </FormControls>
        </Form>
      </div>
    </ShadowBox>
  );
};
