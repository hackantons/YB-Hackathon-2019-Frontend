// @flow

import './App.jsx';
import { isDev } from './vendor/helpers';

/**
 * PWA install
 */

window.installEvent = false;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  window.installEvent = e;
  document.body.classList.add('can-install');
});

if (isDev) {
  document.body.classList.add('dev');
}

/**
 * ServiceWorker install
 */

window.serviceWorkerEvent = false;
if ('serviceWorker' in navigator) {
  //if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(reg => {
      window.serviceWorkerEvent = reg;
      reg.onupdatefound = function() {
        const installing = reg.installing;
        installing.onstatechange = function() {
          console.log(installing);
          console.log(installing.state);
          if (
            installing.state === 'installed' &&
            !navigator.serviceWorker.controller
          ) {
            console.log('installed!');
          }
        };
      };
    })
    .catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
}
