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
		<div className={'message message--' + props.type + ' message--' + props.data.origin}>
			<div className="message__header">
				<div className="message__sender"></div>
				<h2 className="message__title">Message Type: {props.type}</h2>
			</div>
			<div className="message__content">
				<p>Aenean lacinia bibendum nulla sed consectetur.</p>
				{props.type == 'poll' && <Poll />}
			</div>
			<div className="message__footer">
				<span className="message__meta-timestamp">
				{props.data.timestamp}</span>
			</div>
    </div>
  );
};
