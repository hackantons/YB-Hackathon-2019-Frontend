// @flow
import React from 'react';
import cn from 'classnames';

import { Icon, Button } from '@theme';

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
