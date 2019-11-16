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
        {props.time !== '0' && (
          <span className="message__time">{props.time}</span>
        )}
      </div>
      <div className="message__content">
        <figure className="message__image-figure">
          <img
            className="message__image-img"
            src="/static/img/stream/feed-photo@2x.png"
            alt="Selfie"
          />
          <div className="message__image-cta">
            <Icon icon="mdi/share" />
            <span className="message__image-cta-text">auf Fan-Wall posten</span>
          </div>
        </figure>
        <p>{props.message}</p>
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
