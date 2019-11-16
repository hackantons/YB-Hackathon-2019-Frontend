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
        {props.data.time && (
          <span className="message__time">{props.data.time}</span>
        )}
      </div>
      <div className="message__content">
        <h3>{props.data.label}</h3>
        <div className="message__offer">
          <img
            className="message__offer-img"
            src="/static/img/stream/feed-coins-offer1@2x.png"
            alt="Placeholder"
          />
          <div className="message__offer-content">
            <h5>Nike Mercurial Superfly 6 Academy</h5>
            <p>50% Rabatt</p>
            <span className="offer__costs">123.46 CHF</span>
            <Button text="Deal sichern" style="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};
