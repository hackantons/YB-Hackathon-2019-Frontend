// @flow
import React from 'react';
import cn from 'classnames';
import { spielminuten } from '@vendor/helpers';

import './Message.scss';
import { connect } from 'react-redux';

type Props = {
  type: string,
  data: Object,
};

const MatchNote = (props: Props) => {
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
        <h5>{props.label}</h5>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    user: state.user,
    started: state.gameStarted,
  };
})(MatchNote);
