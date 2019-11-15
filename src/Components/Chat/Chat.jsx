// @flow
import React from 'react';
import cn from 'classnames';

import Message from '../Message/Message.jsx';

import {
  Button,
  Form,
  FormFieldset,
  FormControls,
  FormError,
  InputTextarea,
} from '@theme';

import './Chat.scss';

export default (props: Props) => {
	const [formProcessing: boolean, setFormProcessing] = React.useState(false);
  const [error: string, setError] = React.useState('');

  return (
		<div className="chat">
			<div className="chat__message-stream">
				<Message type="text" data={{origin: 'sent', timestamp: 1573761600}} />
				<Message type="text" data={{origin: 'recieved', timestamp: 1573761600}} />
				<Message type="poll" data={{origin: 'recieved', timestamp: 1573761600}} />
			</div>
			<div className="chat__form">
			<Form
				onSubmit={data => {
					if (error === '') {
						setError('This is an Error. Please submit again');
					} else {
						setError('');
						setFormProcessing(true);
						window.setTimeout(() => {
							setFormProcessing(false);
							alert('form submitted! Please visit the console for the output');
							console.log(data);
						}, 3000);
					}
				}}
				className=""
			>
				<InputTextarea
					name="message"
					label="Message"
					placeholder="Schreibe eine Nachricht"
					register={{ required: 'This field is required' }}
				/>
				<FormControls>
					{error !== '' && <FormError>{error}</FormError>}
					<Button
						icon="mdi/send"
						type="submit"
						loading={formProcessing}
						style="primary"
					/>
				</FormControls>
			</Form>
			</div>
    </div>
  );
};
