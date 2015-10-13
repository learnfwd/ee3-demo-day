'use strict';
/* global require */
var App = require('lfa-core').App;

var assets = [
  'img/avatar/kat-angry.png',
  'img/avatar/kat-bored.png',
  'img/avatar/kat-happy.png',
  'img/avatar/kat-helpless.png',
  'img/avatar/kat-neutral.png',
  'img/avatar/kat-sad.png',
  'img/avatar/kat-sleeping.gif',
  'img/avatar/kat-smart.png',
  'img/avatar/kat-smile.png',
  'img/avatar/kat-uneasy.gif',
  'img/avatar/kat-unimpressed.png',
  'img/avatar/kat-upset.png',
  'img/avatar/kat-wink.png',
  'img/avatar/kat-wondering.gif'
  ];

var assetsPreloaded = false;

App.book.on('render', function(/*opts*/) {
  if(!assetsPreloaded) {
    assets.forEach(function preloadAsset (url) {
      var i = new Image();
      i.src = url;
    });
    assetsPreloaded = true;
  }
});
