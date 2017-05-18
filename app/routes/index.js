const faker = require('./faker');
const client = require('./client');
//Behavior
const behaviorvalue = require('./behaviorvalue');
const clientfrequency = require('./clientfrequency');
const clientseniority = require('./clientseniority');
const clientduration = require('./clientduration');
// Potential
const potentialvalue = require('./potentialvalue');
const clientRoomType = require('./clientRoomType');
const clientFood = require('./clientFood');
const clientExtras = require('./clientExtras');

//TWITTER
const twitterAccount = require('./twitterAccount');

module.exports = [].concat(faker, client,clientseniority, clientfrequency, clientduration,behaviorvalue,twitterAccount, potentialvalue, clientRoomType, clientFood,clientExtras);
