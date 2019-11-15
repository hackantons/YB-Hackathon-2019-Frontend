// @flow
import React from 'react';
import cn from 'classnames';

import {
  Button,
  Icon,
  Form,
  FormFieldset,
  FormControls,
  InputSelect,
} from '@theme';

type Props = {
  type: string,
  data: Object,
};

export default (props: Props) => {
  const [formProcessing: boolean, setFormProcessing] = React.useState(false);
  const [error: string, setError] = React.useState('');

  return (
    <div
      className={
        'message message--' + props.type + ' message--' + props.data.origin
      }
    >
      <div className="message__header">
        <span className="message__time">
          <Icon icon="mdi/help" />
        </span>
      </div>
      <div className="message__content">
        <p>{props.data.text}</p>
        <Form>
          <InputSelect
            name="select"
            placeholder="wählen"
            emptyOption={true}
            options={{
              stuermer: 'Spieler A',
              verteidiger: 'Spieler B',
              torhueter: 'Spieler C',
            }}
            large
          />
          <FormControls>
            <Button
              icon="mdi/arrow-right"
              type="submit"
              loading={formProcessing}
              style="primary"
            />
          </FormControls>
        </Form>
      </div>
    </div>
  );
};
