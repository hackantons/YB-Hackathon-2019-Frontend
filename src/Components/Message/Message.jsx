// @flow
import React from 'react';
import cn from 'classnames';

import './Message.scss';
import Poll from '../Message/Poll.jsx';

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
        <span className="message__time">{props.data.time}</span>
      </div>
      <div className="message__content">
        <p>{props.data.text}</p>
        {props.type == 'poll' && <Poll />}
      </div>
      <div className="message__footer">
        <span className="message__sender">{props.data.user}</span>
        {props.data.sector && (
          <span className="message__sector">{props.data.sector}</span>
        )}
      </div>
    </div>
  );
};
