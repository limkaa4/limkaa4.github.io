importScripts('https://wp.24smi.org/js/smi-webpush-sw-dev.js');

console.log('globals')

self.addEventListener("install", event => {
    console.log('install')

    self.skipWaiting();
});

self.addEventListener("activate", event => {
    console.log('activate')

    event.waitUntil(self.clients.claim());
});