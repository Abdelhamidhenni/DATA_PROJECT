const joi = require('joi');
//noinspection JSDuplicatedDeclaration
module.exports = [
    {
        /**
         * Clients Behavior Value routes by id.
         */
        method: 'GET',
        path: '/behaviorvalue/{clientid}',
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
            request.pre.db.query(`SELECT DATEDIFF(NOW(),contact_cre_date) AS Seniority FROM rcu_contact WHERE ID = "${request.params.clientid}";SELECT number_nights AS Duration FROM consumption_activity_transaction WHERE ID ="${request.params.clientid}"; SELECT frequency AS Frequency FROM client_value WHERE client_id ="${request.params.clientid}"`,[1, 2, 3], function (error, results, fields) {
                if (error) throw error;
                //STRINGIFY
                seniority = JSON.stringify(results[0])
                duration = JSON.stringify(results[1])
                frequency = JSON.stringify(results[2])
                //PARSE
                seniority = JSON.parse(seniority)
                duration = JSON.parse(duration)
                frequency = JSON.parse(frequency)
                //GET Behavior params
                //Seniority Math
                seniority = (seniority[0].Seniority)/365.2
                seniority = Math.round(seniority)
                //Duration Math
                duration = duration[0].Duration
                duration = Math.round(duration)
                //Frequency Math
                frequency = frequency[0].Frequency

                //Seniority Score
                seniorityScore = 0;
                if ( seniority <= 1) {

                    seniorityScore = 10

                }
                else if (seniority <= 2) {

                    seniorityScore = 20

                }

                else if (seniority <= 3 ) {
                    seniorityScore = 30

                }
                else if (seniority <= 4 ) {
                    seniorityScore = 40

                }
                else if (seniority <= 5 ) {
                    seniorityScore = 50

                }
                else if (seniority <= 6 ) {
                    seniorityScore = 60

                }
                else if (seniority <= 7 ) {
                    seniorityScore = 70

                }
                else if (seniority <= 8 ) {
                    seniorityScore = 80

                }
                else if (seniority <= 9 ) {
                    seniorityScore = 90

                }
                else if (seniority >= 10 ) {
                    seniorityScore = 100

                }

                else {
                    seniorityScore = 0
                }


                //Duration Score
                durationScore = 0;
                if ( duration <= 1) {

                    durationScore = 10

                }
                else if (duration <= 2) {

                    durationScore = 20

                }

                else if (duration <= 3 ) {
                    durationScore = 30

                }
                else if (duration <= 4 ) {
                    durationScore = 40

                }
                else if (duration <= 5 ) {
                    durationScore = 50

                }
                else if (duration <= 6 ) {
                    durationScore = 60

                }
                else if (duration <= 7 ) {
                    durationScore = 70

                }
                else if (duration <= 8 ) {
                    durationScore = 80

                }
                else if (duration <= 9 ) {
                    durationScore = 90

                }
                else if (duration >= 10 ) {
                    durationScore = 100

                }

                else {
                    durationScore = 0
                }

                //Frequency Score
                frequencyScore = 0;
                if ( frequency <= 1) {

                    frequencyScore = 10

                }
                else if (frequency <= 2) {

                    frequencyScore = 20

                }

                else if (frequency <= 3 ) {
                    frequencyScore = 30

                }
                else if (frequency <= 4 ) {
                    frequencyScore = 40

                }
                else if (frequency <= 5 ) {
                    frequencyScore = 50

                }
                else if (frequency <= 6 ) {
                    frequencyScore = 60

                }
                else if (frequency <= 7 ) {
                    frequencyScore = 70

                }
                else if (frequency <= 8 ) {
                    frequencyScore = 80

                }
                else if (frequency <= 9 ) {
                    frequencyScore = 90

                }
                else if (frequency >= 10 ) {
                    frequencyScore = 100

                }

                else {
                    frequencyScore = 0
                }


                //Calculating Behavior Value

                results = (durationScore + frequencyScore + seniorityScore)/3
                return response(results);

            });
        }
    }

];