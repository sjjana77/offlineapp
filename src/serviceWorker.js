// src/serviceWorker.js

import { Workbox } from 'workbox-window';

export function register() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js');

    wb.addEventListener('activated', event => {
      if (!event.isUpdate) {
        // Perform any initializations needed for the new version
        console.log('Service worker activated for the first time.');
      }
    });

    wb.register()
      .then(registration => {
        console.log('Service Worker registered successfully:', registration);
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }
}
