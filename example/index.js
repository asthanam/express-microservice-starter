'use strict';

/*
 * Dependencies
 */
var express = require('express');
var micro   = require('../');

var app  = express();

app.use(micro({
  discoverable: true,
  debug: true,
  controllersPath: './controllers',
  monitorsPath: './monitors'
}));

app.on('service:registered', function (data) {
  console.log('example app registered with zookeeper', data);

  app.listen(8000, function onListen() {
    console.log('example app initialised and serving at the following root: http://localhost:8000/starter/v1');
  });
});
