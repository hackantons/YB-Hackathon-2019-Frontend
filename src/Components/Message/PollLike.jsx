// @flow
import React from 'react';
import cn from 'classnames';
import { spielminuten } from '@vendor/helpers';

import { Icon, Button } from '@theme';
import { connect } from 'react-redux';

type Props = {
  type: string,
  data: Object,
};

const PollLike = (props: Props) => {
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
        <Button
          icon="mdi/thumb-up"
          type="submit"
          loading={formProcessing}
          style="primary"
        />
        <Button
          icon="mdi/thumb-down"
          type="submit"
          loading={formProcessing}
          style="primary"
        />
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    user: state.user,
    started: state.gameStarted,
  };
})(PollLike);
