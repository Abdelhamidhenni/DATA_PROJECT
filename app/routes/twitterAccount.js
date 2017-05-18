const joi = require('joi');

module.exports = [
    {
      /**
       * Clients routes by id.
       */
      method: 'GET',
      path: '/twitteraccount/{clientid}',
      config: {
          cors: {
            origin: ['http://localhost:8080'],
            credentials: true
          },
          validate: {
             params: {

                  clientid:[
                      joi.number().positive().required(),
                      joi.string().required()
                  ]
              }
          },
          pre: [
              require('../config/db')
          ]
      },

      handler: (request, response) => {
          let results;
          request.pre.db.query(`SELECT twitterAccount AS Twitter FROM rcu_contact WHERE ID = "${request.params.clientid}"`, function (error, results, fields) {
            if (error) throw error;
            results = results[0].Twitter
            return response(results);
          });
      }
    }
];
