const faker = require('faker');
const lowerCase = require('lower-case');

module.exports = [
  {
    /**
     * Fakes data : firstname & lastname.
     */
    method: 'PUT',
    path: '/faker/name',
    config: {
      validate: {

      },
      pre: [
        require('../config/db')
      ]
    },
    handler: (request, response) => {
      let nb_rows;
      let firstname;
      let lastname;
      request.pre.db.query('SELECT COUNT(*) as rows FROM segmentation', function (error, results, fields) {
        if (error) throw error;
        let nb_rows = results[0].rows;
        function iterate(i) {
          if (i > nb_rows) {
            process.stdout.write(".....................................Update completed\n");
          }
          else {
            process.stdout.write('Updating rows -> ' + i/(nb_rows/100) + '% complete...\r');
            updateClient(i, iterate.bind(null, i+1));
          }
        }
        function updateClient(i, next) {
          let firstname = faker.name.firstName();
          let lastname = faker.name.lastName();
          request.pre.db.query('UPDATE segmentation SET firstname = ?, lastname = ? WHERE ID = ?', [firstname, lastname, i], function (error, results, fields) {
            if (error) throw error;
            next();
          });
        }
        iterate(1);
      });
    }
  },
  {
    /**
     * Fakes data : email.
     */
    method: 'PUT',
    path: '/faker/email',
    config: {
      validate: {

      },
      pre: [
        require('../config/db')
      ]
    },
    handler: (request, response) => {
      let nb_rows;
      let email;
      request.pre.db.query('SELECT COUNT(*) as rows FROM segmentation', function (error, results, fields) {
        if (error) throw error;
        let nb_rows = results[0].rows;
        function iterate(i) {
          if (i > nb_rows) {
            process.stdout.write("Update completed.....................................\n");
          }
          else {
            process.stdout.write('Updating rows -> ' + i/(nb_rows/100) + '% complete...\r');
            updateClient(i, iterate.bind(null, i+1));
          }
        }
        function updateClient(i, next) {
          request.pre.db.query('SELECT firstname, lastname FROM segmentation WHERE ID = ?', [i], function (error, results, fields) {
            if (error) throw error;
            let email = lowerCase(results[0].firstname) + "." + lowerCase(results[0].lastname) + "@gmail.com";
            request.pre.db.query('UPDATE segmentation SET email = ? WHERE ID = ?', [email, i], function (error, results, fields) {
              if (error) throw error;
              next();
            });
          });
        }
        iterate(1);
      });
    }
  },
    {
        /**
         * Fakes data : frequency.
         */
        method: 'PUT',
        path: '/faker/frequency',
        config: {
            validate: {

            },
            pre: [
                require('../config/db')
            ]
        },
        handler: (request, response) => {
            let nb_rows;
            let number;
            request.pre.db.query('SELECT COUNT(*) as rows FROM client_value', function (error, results, fields) {
                if (error) throw error;
                let nb_rows = results[0].rows;
                function iterate(i) {
                    if (i > nb_rows) {
                        process.stdout.write(".....................................Update completed\n");
                    }
                    else {
                        process.stdout.write('Updating rows -> ' + i/(nb_rows/100) + '% complete...\r');
                        updateClient(i, iterate.bind(null, i+1));
                    }
                }
                function updateClient(i, next) {
                    let number = Math.floor(Math.random() * 14) + 1  ;
                    request.pre.db.query('UPDATE client_value SET frequency  = ? WHERE client_id = ?', [number, i], function (error, results, fields) {
                        if (error) throw error;
                        next();
                    });
                }
                iterate(1);
            });
        }
    },
    {
        /**
         * Fakes data : frequency.
         */
        method: 'PUT',
        path: '/faker/twitter',
        config: {
            validate: {

            },
            pre: [
                require('../config/db')
            ]
        },
        handler: (request, response) => {
            let nb_rows;
            let number;
            request.pre.db.query('SELECT COUNT(*) as rows FROM client_value', function (error, results, fields) {
                if (error) throw error;
                let nb_rows = results[0].rows;
                function iterate(i) {
                    if (i > nb_rows) {
                        process.stdout.write(".....................................Update completed\n");
                    }
                    else {
                        process.stdout.write('Updating rows -> ' + i/(nb_rows/100) + '% complete...\r');
                        updateClient(i, iterate.bind(null, i+1));
                    }
                }
                function updateClient(i, next) {
                    var twitter = faker.random.arrayElement(["AbdelhamidHenni","karendegroof","data_nerd","joelcomm","dennisyu","adexchanger","HuffingtonPost","BarackObama","GrantCardone","JasonRJordan","MarketingProfs","Sam___Hurley","blondishnet"]);
                    request.pre.db.query('UPDATE rcu_contact SET twitterAccount  = ? WHERE ID = ?', [twitter, i], function (error, results, fields) {
                        if (error) throw error;
                        next();
                    });
                }
                iterate(1);
            });
        }
    },

    {
    /**
     * Fakes data : company.
     */
    method: 'PUT',
    path: '/faker/company',
    config: {
      validate: {

      },
      pre: [
        require('../config/db')
      ]
    },
    handler: (request, response) => {
      let nb_rows;
      let company;
      request.pre.db.query('SELECT COUNT(*) as rows FROM segmentation', function (error, results, fields) {
        if (error) throw error;
        let nb_rows = results[0].rows;
        function iterate(i) {
          if (i > nb_rows) {
            process.stdout.write(".....................................Update completed\n");
          }
          else {
            process.stdout.write('Updating rows -> ' + i/(nb_rows/100) + '% complete...\r');
            updateClient(i, iterate.bind(null, i+1));
          }
        }
        function updateClient(i, next) {
          let company = faker.company.companyName();
          request.pre.db.query('UPDATE segmentation SET company = ? WHERE ID = ?', [company, i], function (error, results, fields) {
            if (error) throw error;
            next();
          });
        }
        iterate(1);
      });
    }
  },
  {
    /**
     * Fakes data : client value initialization.
     */
    method: 'PUT',
    path: '/faker/clientvalue',
    config: {
      validate: {

      },
      pre: [
        require('../config/db')
      ]
    },
    handler: (request, response) => {
      let nb_rows;
      request.pre.db.query('SELECT COUNT(*) as rows FROM segmentation', function (error, results, fields) {
        if (error) throw error;
        let nb_rows = results[0].rows;
        function iterate(i) {
          if (i > nb_rows) {
            process.stdout.write(".....................................Update completed\n");
          }
          else {
            process.stdout.write('Updating rows -> ' + i/(nb_rows/100) + '% complete...\r');
            updateClient(i, iterate.bind(null, i+1));
          }
        }
        function updateClient(i, next) {

          let frequency = 1;
          request.pre.db.query('INSERT INTO client_value SET client_id = ?, frequency = ?', [i, frequency], function (error, results, fields) {
            if (error) throw error;
            next();
          });
        }
        iterate(1);
      });
    }

  },
    {
        /**
         * Fakes data : roomtype.
         */
        method: 'PUT',
        path: '/faker/roomtype',
        config: {
            validate: {

            },
            pre: [
                require('../config/db')
            ]
        },
        handler: (request, response) => {
            let nb_rows;
            let number;
            request.pre.db.query('SELECT COUNT(*) as rows FROM client_value', function (error, results, fields) {
                if (error) throw error;
                let nb_rows = results[0].rows;
                function iterate(i) {
                    if (i > nb_rows) {
                        process.stdout.write(".....................................Update completed\n");
                    }
                    else {
                        process.stdout.write('Updating rows -> ' + i/(nb_rows/100) + '% complete...\r');
                        updateClient(i, iterate.bind(null, i+1));
                    }
                }
                function updateClient(i, next) {
                    var roomtype = faker.random.arrayElement(["triple","suites"]);
                    request.pre.db.query('UPDATE client_value SET room_type  = ? WHERE client_id = ?', [roomtype, i], function (error, results, fields) {
                        if (error) throw error;
                        next();
                    });
                }
                iterate(1);
            });
        }
    },
    {
        /**
         * Fakes data : extras.
         */
        method: 'PUT',
        path: '/faker/extras',
        config: {
            validate: {

            },
            pre: [
                require('../config/db')
            ]
        },
        handler: (request, response) => {
            let nb_rows;
            let number;
            request.pre.db.query('SELECT COUNT(*) as rows FROM client_value', function (error, results, fields) {
                if (error) throw error;
                let nb_rows = results[0].rows;
                function iterate(i) {
                    if (i > nb_rows) {
                        process.stdout.write(".....................................Update completed\n");
                    }
                    else {
                        process.stdout.write('Updating rows -> ' + i/(nb_rows/100) + '% complete...\r');
                        updateClient(i, iterate.bind(null, i+1));
                    }
                }
                function updateClient(i, next) {
                    var extras = faker.random.arrayElement([500,600,700,800,900,1000]);
                    request.pre.db.query('UPDATE client_value SET extras  = ? WHERE client_id = ?', [extras, i], function (error, results, fields) {
                        if (error) throw error;
                        next();
                    });
                }
                iterate(1);
            });
        }
    },
    {
        /**
         * Fakes data : extras.
         */
        method: 'PUT',
        path: '/faker/food',
        config: {
            validate: {

            },
            pre: [
                require('../config/db')
            ]
        },
        handler: (request, response) => {
            let nb_rows;
            let number;
            request.pre.db.query('SELECT COUNT(*) as rows FROM client_value', function (error, results, fields) {
                if (error) throw error;
                let nb_rows = results[0].rows;
                function iterate(i) {
                    if (i > nb_rows) {
                        process.stdout.write(".....................................Update completed\n");
                    }
                    else {
                        process.stdout.write('Updating rows -> ' + i/(nb_rows/100) + '% complete...\r');
                        updateClient(i, iterate.bind(null, i+1));
                    }
                }
                function updateClient(i, next) {
                    var food = faker.random.arrayElement([5,6,7,8,9,10]);
                    request.pre.db.query('UPDATE client_value SET food_beverage  = ? WHERE client_id = ?', [food, i], function (error, results, fields) {
                        if (error) throw error;
                        next();
                    });
                }
                iterate(1);
            });
        }
    },
];
