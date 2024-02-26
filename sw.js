importScripts('https://wp.24smi.org/js/smi-webpush-sw-dev.js');

self.addEventListener("install", event => {
    console.log('install')

    console.log(self.navigator)

    self.skipWaiting();
});

self.addEventListener("activate", event => {
    console.log('activate')

    event.waitUntil(self.clients.claim());
});