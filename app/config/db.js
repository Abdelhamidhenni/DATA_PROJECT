'use strict';

/**
 * Module dependencies.
 */

const mysql = require('mysql');
const debug = require('debug')('db');

/**
 * Export the MySQL client pre-handler.
 */

module.exports = {
  assign: 'db',
  method: (request, reply) => {
    debug('Connecting the database')
    const db = mysql.createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'web_school_2017',
      multipleStatements: true
    });
    db.connect(function(err) {
      if (err) {
        console.error('Error Connecting: ' + err.stack);
        return;
      }
      console.log('Connected as ID ' + db.threadId);
    });

    return reply(db);
  }
};
