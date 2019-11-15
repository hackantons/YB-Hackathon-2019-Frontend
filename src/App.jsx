// @flow

import ReactDOM from 'react-dom';
import React from 'react';
import Amplify from 'aws-amplify';
import { awsConfig } from './store/amplify';
Amplify.configure(awsConfig);

import Page from './Page.jsx';

const $container: HTMLElement | null = document.querySelector('#app');

if ($container) {
  ReactDOM.render(<Page />, $container);
}
