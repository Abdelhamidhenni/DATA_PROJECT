const joi = require('joi');

module.exports = [
    {
        /**
         * Clients Room Type routes by id.
         */
        method: 'GET',
        path: '/clientroomtype/{clientid}',
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
            request.pre.db.query(`SELECT room_type As Room FROM client_value WHERE client_id ="${request.params.clientid}"`, function (error, results, fields) {
                if (error) throw error;
                results = JSON.stringify(results[0].Room)
                return response(results);

            });
        }
    }
];