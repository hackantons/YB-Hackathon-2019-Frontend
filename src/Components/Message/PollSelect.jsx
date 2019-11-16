// @flow
import React from 'react';
import cn from 'classnames';

import { spielminuten } from '@vendor/helpers';
import { connect } from 'react-redux';

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

const PollSelect = (props: Props) => {
  const [formProcessing: boolean, setFormProcessing] = React.useState(false);
  const [error: string, setError] = React.useState('');

  return (
    <div className={cn('message', 'message--' + props.type)}>
      <div className="message__header">
        <span className="message__time">
          <Icon icon="mdi/help" />
        </span>
      </div>
      <div className="message__content">
        <p>{props.label}</p>
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

export default connect(state => {
  return {
    user: state.user,
    started: state.gameStarted,
  };
})(PollSelect);
