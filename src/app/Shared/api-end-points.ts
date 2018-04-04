export class ApiEndPoints {

  // Access Units
  static createNewAccessUnit = '';
  static updateAccessUnit = '';
  static deleteAccessUnit = '';
  static allAccessUnits = '';
  static getAccessUnit = '';

  // Building
  static createNewBuilding = 'api/buildings/create';
  static updateBuilding = 'api/buildings/update';
  static deleteBuilding = 'api/buildings/delete';
  static allBuildings = 'api/buildings/get/all';
  static getBuilding = 'api/buildings/get/';

  // Card Inventory
  static createNewCardInventory = '';
  static updateCardInventory = '';
  static deleteCardInventory = '';
  static getCardInventory = '';
  static allCardInventories = '';

  // Card Types
  static createNewCardType = 'api/card-types/create';
  static updateCardType = 'api/card-types/update';
  static deleteCardType = 'api/card-types/delete';
  static getCardType = 'api/card-types/get/';
  static allCardTypes = 'api/card-types/get/all';

  // Card Vendor
  static createNewCardVendor = 'api/card-vendors/create';
  static updateCardVendor = 'api/card-vendors/update';
  static deleteCardVendor = 'api/card-vendors/delete';
  static getCardVendor = 'api/card-vendors/get/';
  static allCardVendors = 'api/card-vendors/get/all';

  // Card
  static createNewCard = 'api/cards/create';
  static updateCard = 'api/cards/update';
  static deleteCard = 'api/cards/delete';
  static getCard = 'api/cards/get/';
  static allCards = 'api/cards/get/all';

  // Cardholder
  static createNewCardholder = 'api/cardholders/create';
  static updateCardholder = 'api/cardholders/update';
  static deleteCardholder = 'api/cardholders/delete';
  static getCardholder = 'api/cardholders/get/';
  static allCardholders = 'api/cardholders/get/all';

   // Operator
   static createNewOperator = '';
   static updateOperator = '';
   static deleteOperator = '';
   static getOperator = '';
   static allOperators = '';

  // User
  static login = '/api/oauth/token';
  static resetPassword = 'reset-password';
  static forgotPassword = 'reset-password';
  static refreshToken = 'accounts/auth';

  // Vehicle
  static createNewVehicle = '';
  static updateVehicle = '';
  static deleteVehicle = '';
  static getVehicle = '';
  static allVehicles = '';

    // card-request
    static createNewCardRequest = 'api/card-requests/create';
    static updateCardRequest = 'api/card-requests/update';
    static deleteCardRequest = 'api/card-requests/delete';
    static getCardRequest = 'api/card-requests/get/';
    static allCardRequests = 'api/card-requests/get/all';

    // personalisation-request
    static createNewPersonalisationRequest = 'api/personalisation-requests/create';
    static updatePersonalisationRequest = 'api/personalisation-requests/update';
    static deletePersonalisationRequest = 'api/personalisation-requests/delete';
    static getPersonalisationRequest = 'api/personalisation-requests/get/';
    static allPersonalisationRequests = 'api/personalisation-requests/get/all';

    // card-replacements
    static createNewCardReplacement = 'api/card-replacements/create';
    static updateCardReplacement = 'api/card-replacements/update';
    static deleteCardReplacement = 'api/card-replacements/delete';
    static getCardReplacement = 'api/card-replacements/get/';
    static allCardReplacements = 'api/card-replacements/get/all';
}
