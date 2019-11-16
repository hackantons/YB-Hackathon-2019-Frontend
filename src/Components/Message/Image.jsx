// @flow
import React from 'react';
import cn from 'classnames';
import { spielminuten } from '@vendor/helpers';
import { Link } from 'react-router-dom';

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
        <figure className="message__image-figure">
          <div className="message__image-img"></div>
          <div className="message__image-cta">
            <Icon icon="mdi/share" />
            <span className="message__image-cta-text">auf Fan-Wall posten</span>
          </div>
        </figure>
        <p>{props.message}</p>
      </div>
      <div className="message__footer">
        <span className="message__sender">{props.name}</span>
        <Link to="/statistics/fans" className="message__permalink"></Link>
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
