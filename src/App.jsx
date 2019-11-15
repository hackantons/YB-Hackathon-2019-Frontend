// @flow

import ReactDOM from 'react-dom';
import React from 'react';

import Page from './Page.jsx';

const $container: HTMLElement | null = document.querySelector('#app');

if ($container) {
  ReactDOM.render(<Page />, $container);
}
