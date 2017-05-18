'use strict';

/**
 * Module dependencies.
 */

const os = require('os');
const debug = require('debug')('accor:server');

/**
 * Importing routes
 */
const routes = require('./routes');

/**
 * New Hapi server
 * (HTTP connection).
 */

debug('New HTTP server');
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 1337,
  routes: {
    cors: true
  }
});

server.route(routes);

/**
 * Start the server.
 */

debug('Start the HTTP server');
server.start(err => {
  if (err) {
    throw new Error(err)
  }

  console.log(`Server running at ${server.info.uri}`);
});
