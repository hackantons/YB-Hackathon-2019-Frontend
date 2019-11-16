// @flow
import React from 'react';
import cn from 'classnames';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Page.scss';

import Onboarding from './Components/Auth/Onboarding.jsx';
import Content from './Components/Page/Content.jsx';
import Profile from './Components/Profile/index.jsx';

import { connect } from 'react-redux';
import Statistics from './Components/Statistics/Statistics.jsx';
import { addMessage, updateWs } from '@redux/actions';

window.socket = new WebSocket('wss://stream.bscyb.dev/stream');

const App = props => {
  const [messagesWS, setMessagesWS] = React.useState(false);

  React.useEffect(() => {
    //return;
    if (!messagesWS) {
      setMessagesWS(socket);
      socket.onmessage = function(event) {
        event.data.split('\n').forEach(data => {
          let dataObject = false;
          try {
            dataObject = JSON.parse(data);
          } catch (error) {
            console.log('error', data);
          }
          if (dataObject !== false) {
            if (dataObject.time === 0) {
              dataObject.time = new Date().getTime();
            }
            props.addMessage(dataObject);
          }
        });
        /*
        props.addMessages(
          event.data.split('\n').map(data => {
            let dataObject = false;
            try {
              dataObject = JSON.parse(data);
            } catch (error) {}
            if (dataObject !== false) {
              return dataObject;
            }
          })
        );
         */
      };
    }
  });

  return (
    <div className="page">
      {props.user.group === '' || props.user.id === '' ? (
        <React.Fragment>
          <header className="page__header">
            <div className="page__header-logo">
              <img src="static/img/bscyb-logo.png" alt="BSCYB Logo" />
            </div>
          </header>
          <Onboarding className="page__main" />
        </React.Fragment>
      ) : (
        <Router>
          <nav className="page__navigation">
            <Link to="/profile" className="page__navigation-element">
              Profil
            </Link>
            <Link to="/" className="page__navigation-element">
              Live
            </Link>
            <Link to="/statistics" className="page__navigation-element">
              Statistiken
            </Link>
          </nav>
          <div className="page__content">
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
              <Route path="/">
                <Content />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
};

export default connect(
  state => {
    return {
      user: state.user,
      messages: state.messages,
    };
  },
  {
    addMessage,
  }
)(App);
