var faker = require('faker');

// Create an object for config file
var db = {cardholders:[]};

var genders = ['male', 'female'];

for(var i=1; i<=10; i++){
    var cardholder = {};
    cardholder.id = i;

  var fName = faker.name.firstName();
  var lName = faker.name.lastName();

  cardholder.firstName = fName;
  cardholder.lastName = lName;
  cardholder.fullName = fName + ' ' + lName;
  cardholder.gender = genders[faker.random.number(1)];
  cardholder.identificationNo = faker.random.alphaNumeric(12);
  cardholder.nationality = faker.address.county();

    db.cardholders.push(cardholder);
}

console.log(JSON.stringify(db));
