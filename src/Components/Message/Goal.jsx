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
        <div className="goal__scorer">
          <img
            className="goal__scorer-img"
            src="/static/img/stream/player.png"
            alt="Placeholder"
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
            src="https://placehold.co/20x20"
            alt="Placeholder"
          />{' '}
          +20 YB Coins
        </div>
      </div>
    </div>
  );
};
