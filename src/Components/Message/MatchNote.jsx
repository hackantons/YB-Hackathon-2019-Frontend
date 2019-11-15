// @flow
import React from 'react';
import cn from 'classnames';

import './Message.scss';

type Props = {
  type: string,
  data: Object,
};

export default (props: Props) => {
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
        <h5>{props.data.label}</h5>
        <p>{props.data.text}</p>
      </div>
    </div>
  );
};
