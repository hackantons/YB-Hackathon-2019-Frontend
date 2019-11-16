// @flow
import React from 'react';
import cn from 'classnames';

import { spielminuten } from '@vendor/helpers';
import { connect } from 'react-redux';

import './Message.scss';

type Props = {
  type: string,
  data: Object,
};

const Goal = (props: Props) => {
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
        <div className="goal__scorer">
          <img
            className="goal__scorer-img"
            src="/static/img/stream/player.png"
            alt="Player"
          />
          <div className="goal__scorer-content">
            <h3>Jean-Pierre Nsame</h3>
            <div className="goal__data">
              <span>1 Tor</span>
              <span>4 Schüsse</span>
              <span>28 Pässe</span>
            </div>
          </div>
        </div>
      </div>
      <div className="message__footer">
        <div className="goal__coins">
          <img
            className="message__offer-img"
            src="/static/img/stream/coin-yellow@2x.png"
            alt="Coin"
          />{' '}
          +20 YB Coins
        </div>
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    user: state.user,
    started: state.gameStarted,
  };
})(Goal);
