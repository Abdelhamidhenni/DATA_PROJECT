const joi = require('joi');
//noinspection JSDuplicatedDeclaration
module.exports = [
    {
        /**
         * Clients Potential Value routes by id.
         */
        method: 'GET',
        path: '/potentialvalue/{clientid}',
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
            request.pre.db.query(`SELECT room_type AS Room FROM client_value WHERE client_id ="${request.params.clientid}";SELECT food_beverage AS Food FROM client_value WHERE client_id ="${request.params.clientid}"; SELECT extras AS Extras FROM client_value WHERE client_id ="${request.params.clientid}"`,[1, 2, 3], function (error, results, fields) {
                if (error) throw error;
                //STRINGIFY
                room = JSON.stringify(results[0])
                food_beverage = JSON.stringify(results[1])
                extras = JSON.stringify(results[2])
                //PARSE
                room = JSON.parse(room)
                food_beverage = JSON.parse(food_beverage)
                extras = JSON.parse(extras)
                //GET Potential params
                //room
                room = room[0].Room
                //food_beverage Math
                food_beverage = food_beverage[0].Food
                food_beverage = Math.round(food_beverage)
                //extras Math
                extras = extras[0].Extras

                //room Score
                roomScore  = 0;
                if ( room == "simple" ) {

                    roomScore  = 25

                }
                else if (room == "double") {

                    roomScore  = 50

                }

                else if (room == "triple" ) {
                    roomScore  = 75

                }
                else if (room == "suites" ) {
                    roomScore  = 100

                }

                else {
                    roomScore  = 0
                }


                //food_beverage Score
                foodScore= 0;
                if ( food_beverage <= 1) {

                    foodScore= 10

                }
                else if (food_beverage <= 2) {

                    foodScore= 20

                }

                else if (food_beverage <= 3 ) {
                    foodScore= 30

                }
                else if (food_beverage <= 4 ) {
                    foodScore= 40

                }
                else if (food_beverage <= 5 ) {
                    foodScore= 50

                }
                else if (food_beverage <= 6 ) {
                    foodScore= 60

                }
                else if (food_beverage <= 7 ) {
                    foodScore= 70

                }
                else if (food_beverage <= 8 ) {
                    foodScore= 80

                }
                else if (food_beverage <= 9 ) {
                    foodScore= 90

                }
                else if (food_beverage >= 10 ) {
                    foodScore= 100

                }

                else {
                    foodScore= 0
                }

                //extras Score
                extrasScore = 0;
                if ( extras <= 100) {

                    extrasScore = 10

                }
                else if (extras <= 200) {

                    extrasScore = 20

                }

                else if (extras <= 300 ) {
                    extrasScore = 30

                }
                else if (extras <= 400 ) {
                    extrasScore = 40

                }
                else if (extras <= 500 ) {
                    extrasScore = 50

                }
                else if (extras <= 600 ) {
                    extrasScore = 60

                }
                else if (extras <= 700 ) {
                    extrasScore = 70

                }
                else if (extras <= 800 ) {
                    extrasScore = 80

                }
                else if (extras <= 900 ) {
                    extrasScore = 90

                }
                else if (extras >= 1000 ) {
                    extrasScore = 100

                }

                else {
                    extrasScore = 0
                }


                //Calculating Behavior Value

                results = (foodScore+ extrasScore + roomScore)/3
                return response(results);

            });
        }
    }

];