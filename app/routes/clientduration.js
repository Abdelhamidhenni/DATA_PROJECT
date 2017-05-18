const joi = require('joi');

module.exports = [
    {
        /**
         * Clients Duration routes by id.
         */
        method: 'GET',
        path: '/clientduration/{clientid}',
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
            //   request.pre.db.query(`SELECT contact_cre_date FROM rcu_contact WHERE ID = "${request.params.clientid}"`, function (error, results, fields) {
            request.pre.db.query(`SELECT number_nights FROM consumption_activity_transaction WHERE ID ="${request.params.clientid}"`, function (error, results, fields) {
                if (error) throw error;
                results = JSON.stringify(results[0].number_nights)
                return response(results);

            });
        }
    }
];