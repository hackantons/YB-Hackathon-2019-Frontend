// @flow

import ReactDOM from 'react-dom';
import React from 'react';
import Amplify from 'aws-amplify';
import { awsConfig } from './store/amplify';
Amplify.configure(awsConfig);

import Page from './Page.jsx';

const $container: HTMLElement | null = document.querySelector('#app');

import { Provider } from 'react-redux';
import store from '@redux/store';

if ($container) {
  ReactDOM.render(
    <Provider store={store}>
      <Page />
    </Provider>,
    $container
  );
}
