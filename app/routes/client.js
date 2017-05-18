const joi = require('joi');

module.exports = [
    {
      /**
       * Clients routes by id.
       */
      method: 'GET',
      path: '/client/{clientid}',
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
          request.pre.db.query(`SELECT * FROM segmentation WHERE ID = "${request.params.clientid}"`, function (error, results, fields) {
            if (error) throw error;
            return response(results);
          });
      }
    }
];
