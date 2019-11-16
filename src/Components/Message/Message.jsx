// @flow
import React from 'react';
import cn from 'classnames';
import { spielminuten } from '@vendor/helpers';

import './Message.scss';
import { connect } from 'react-redux';

import { Icon } from '@theme';

type Props = {
  type: string,
  data: Object,
};

const Message = (props: Props) => {
  return (
    <div className={cn('message', 'message--' + props.type)}>
      <div className="message__header">
        {props.time && (
          <span className="message__time">
            {spielminuten(props.started, props.time)}
          </span>
        )}
      </div>
      <div className="message__content">
        <p>
          {props.sentiment && (
            <span
              className={cn(
                'message__sentiment',
                'message__sentiment--' + props.sentiment.toLowerCase()
              )}
            >
              <Icon icon={'mdi/face-' + props.sentiment.toLowerCase()} />
            </span>
          )}
          {props.message}
        </p>
      </div>
      <div className="message__footer">
        <span className="message__sender">{props.name}</span>
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    user: state.user,
    started: state.gameStarted,
  };
})(Message);
