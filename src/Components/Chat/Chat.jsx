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
				<Message type="text" data={{origin: 'sent', time: 25, user: 'Simu', sector: 'Sektor A8', text: 'Leute wie geil isch das de!'}} />
				<Message type="text" data={{origin: 'recieved', time: 26, user: 'Tim', sector: 'Sektor A10', text: 'Gäu sind anders viu Lüt da…'}} />
				<Message type="poll" data={{origin: 'recieved', time: 30, user: 'YB', sector: false, text: 'Wie siehst du die Chance das YB heute den Titel holt?'}} />
				<div className="chat__message-stream-matchtime">35:22</div>
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
					placeholder="Schreibe eine Nachricht"
					register={{ required: 'This field is required' }}
					rows="2"
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
