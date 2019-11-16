// @flow
import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import axios from 'axios';

import Message from '../Message/Message.jsx';

import PollSelect from '../Message/PollSelect.jsx';
import PollLike from '../Message/PollLike.jsx';

import MatchNote from '../Message/MatchNote.jsx';
import Offer from '../Message/Offer.jsx';
import Goal from '../Message/Goal.jsx';
import Image from '../Message/Image.jsx';

import { spielminuten } from '@vendor/helpers';

import {
  Button,
  Form,
  FormFieldset,
  FormControls,
  FormError,
  InputTextarea,
} from '@theme';

import './Stream.scss';
import { addMessages } from '@redux/actions';

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

const Stream = (props: Props) => {
  const [formProcessing: boolean, setFormProcessing] = React.useState(false);
  const [error: string, setError] = React.useState('');
  const stream = React.useRef();

  return (
    <div className="stream" ref={stream}>
      <div className="stream__message-stream">
        <div className="stream__message-wrapper">
          {props.messages
            .filter(
              message =>
                (message && message.group === props.user.group) ||
                message.group === ''
            )
            .map(function(message, i) {
              switch (message.type) {
                case 'text':
                  return <Message {...message} key={i} />;
                  break;
                case 'poll-select':
                  return <PollSelect {...message} key={i} />;
                  break;
                case 'poll-like':
                  return <PollLike {...message} key={i} />;
                  break;
                case 'matchnote':
                  return <MatchNote {...message} key={i} />;
                  break;
                case 'offer':
                  return <Offer {...message} key={i} />;
                  break;
                case 'goal':
                  return <Goal {...message} key={i} />;
                  break;
                case 'image':
                  return <Image {...message} key={i} />;
                  break;
              }
            })}
          <div className="stream__message-stream-matchtime">
            {/*spielminuten(props.started, timeNow)*/}
          </div>
        </div>
      </div>
      <div className="stream__form">
        <Form
          onSubmit={(data, e) => {
            console.log(data);
            e.target.reset();
            //setFormProcessing(true);
            axios
              .post('https://stream.bscyb.dev/stream', {
                group: props.user.group,
                name: props.user.name,
                message: data.message,
                type: 'text',
                time: '0',
              })
              .then(resp => {
                setFormProcessing(false);
              });
          }}
          className=""
        >
          <InputTextarea
            label=""
            name="message"
            placeholder="Gib deinen Senf ab"
            register={{ required: 'This field is required' }}
            rows="2"
            onKeyPress={e => {
              if (e.key === 'Enter') {
                //submitForm.current.submit();
              }
            }}
          />
          <FormControls>
            {error !== '' && <FormError>{error}</FormError>}
            <Button
              text=""
              icon="mdi/send"
              type="submit"
              loading={formProcessing}
              style="secondary"
            />
          </FormControls>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    messages: state.messages,
    started: state.gameStarted,
  };
};
export default connect(
  mapStateToProps,
  {
    addMessages,
  }
)(Stream);
