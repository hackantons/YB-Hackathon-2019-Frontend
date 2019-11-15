// @flow
import React from 'react';
import cn from 'classnames';

import Message from '../Message/Message.jsx';

import PollSelect from '../Message/PollSelect.jsx';
import PollLike from '../Message/PollLike.jsx';

import MatchNote from '../Message/MatchNote.jsx';
import Offer from '../Message/Offer.jsx';
import Goal from '../Message/Goal.jsx';

import {
  Button,
  Form,
  FormFieldset,
  FormControls,
  FormError,
  InputTextarea,
} from '@theme';

import './Stream.scss';

const streamData = [
  {
    type: 'poll-select',
    data: {
      origin: 'recieved',
      time: false,
      user: false,
      sector: 'Sektor A8',
      text: 'Wer schiesst heute das erste Tor?',
    },
  },
  {
    type: 'text',
    data: {
      origin: 'sent',
      time: false,
      user: 'Simu',
      sector: 'Sektor A8',
      text: 'Leute wo sind ihr?',
    },
  },
  {
    type: 'matchnote',
    data: {
      origin: 'recieved',
      time: '0',
      label: 'Anpfiff',
      text: 'Das Spiel geht los',
    },
  },
  {
    type: 'matchnote',
    data: {
      origin: 'recieved',
      time: 2,
      label: 'Chance YB',
      text: 'Gianluca Gaudino',
    },
  },
  {
    type: 'text',
    data: {
      origin: 'sent',
      time: 25,
      user: 'Simu',
      sector: 'Sektor A8',
      text: 'Leute wie geil isch das de!',
    },
  },
  {
    type: 'text',
    data: {
      origin: 'recieved',
      time: 26,
      user: 'Tim',
      sector: 'Sektor A10',
      text: 'Gäu sind anders viu Lüt da…',
    },
  },
  {
    type: 'offer',
    data: {
      origin: 'recieved',
      time: 80,
      label: 'Itze gschwind!',
    },
  },
  {
    type: 'matchnote',
    data: {
      origin: 'recieved',
      time: 82,
      label: 'Basel geht in Führung',
      text: 'Basel schiesst in der 89 Minute das 1:0',
    },
  },
  {
    type: 'poll-like',
    data: {
      origin: 'recieved',
      time: 89,
      user: false,
      sector: false,
      text: 'Werden wir noch Meister?',
    },
  },
  {
    type: 'matchnote',
    data: {
      origin: 'recieved',
      time: '+0:25',
      label: 'Spiel in Basel beendet',
      text: 'Das Spiel endet 1:0 für Basel. Chömet itze Gielä!',
    },
  },
  {
    type: 'goal',
    data: {
      origin: 'recieved',
      time: '+2:15',
    },
  },
];

export default (props: Props) => {
  const [formProcessing: boolean, setFormProcessing] = React.useState(false);
  const [error: string, setError] = React.useState('');

  return (
    <div className="stream">
      <div className="stream__message-stream">
        <div className="stream__message-wrapper">
          {streamData.map(function(message, i) {
            switch (message.type) {
              case 'text':
                return (
                  <Message type={message.type} data={message.data} key={i} />
                );
                break;
              case 'poll-select':
                return (
                  <PollSelect type={message.type} data={message.data} key={i} />
                );
                break;
              case 'poll-like':
                return (
                  <PollLike type={message.type} data={message.data} key={i} />
                );
                break;
              case 'matchnote':
                return (
                  <MatchNote type={message.type} data={message.data} key={i} />
                );
                break;
              case 'offer':
                return (
                  <Offer type={message.type} data={message.data} key={i} />
                );
                break;
              case 'goal':
                return <Goal type={message.type} data={message.data} key={i} />;
                break;
            }
          })}
          <div className="stream__message-stream-matchtime">+2:35</div>
        </div>
      </div>
      <div className="stream__form">
        <Form
          onSubmit={data => {
            if (error === '') {
              setError('This is an Error. Please submit again');
            } else {
              setError('');
              setFormProcessing(true);
              window.setTimeout(() => {
                setFormProcessing(false);
                alert(
                  'form submitted! Please visit the console for the output'
                );
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
