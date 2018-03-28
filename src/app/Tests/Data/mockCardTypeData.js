var faker = require('faker');

// Create an object for config file
var db = {cardTypes:[]};

for(var i=1; i<=4; i++){
    var cardType = {};
    cardType.id = i;

  db.cardholders.push(cardholder);
}

console.log(JSON.stringify(db));
