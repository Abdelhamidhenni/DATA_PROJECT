const joi = require('joi');

module.exports = [
    {
        /**
         * Clients Seniority routes by id.
         */
        method: 'GET',
        path: '/clientseniority/{clientid}',
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
            request.pre.db.query(`SELECT DATEDIFF(NOW(),contact_cre_date) AS Seniority FROM rcu_contact WHERE ID = "${request.params.clientid}"`, function (error, results, fields) {
                if (error) throw error;
                results =  Math.round(JSON.stringify(results[0].Seniority)/(365.2));
                return response(results);

            });

        }
    }
];