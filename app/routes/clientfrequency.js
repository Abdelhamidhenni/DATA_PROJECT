const joi = require('joi');

module.exports = [
    {
        /**
         * Clients Frequency routes by id.
         */
        method: 'GET',
        path: '/clientfrequency/{clientid}',
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
            request.pre.db.query(`SELECT frequency FROM client_value WHERE client_id ="${request.params.clientid}"`, function (error, results, fields) {
                if (error) throw error;
                results = JSON.stringify(results[0].frequency)
                return response(results);

            });
        }
    }
];