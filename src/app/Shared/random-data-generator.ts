import * as faker from 'faker';
import { Cardholder } from '../Models/Domain/cardholder.model';
import { BusinessUnit } from '../Models/Domain/business-unit.model';
import { CardType } from '../Models/Domain/card-type.model';
import { SHCCardType } from '../Models/Enums/shc-card-type.enum';
import { IdentificationType } from './../Models/Enums/identification-type.enum';
import { Company } from '../Models/Domain/company.model';
import { SOAPersonalizationRequest } from '../Models/Domain/soa-personalization-request.model';
import { CardUserStatus } from '../Models/Enums/card-user-status.enum';
import { SOAReplaceCardRequest } from '../Models/Domain/soa-replace-card-request.model';
import { RequestStatus } from '../Models/Enums/request-status.enum';
import { SOACardRequest } from '../Models/Domain/soa-card-request.model';
import { CardVendor } from '../Models/Domain/card-vendor.model';
import { Building } from '../Models/Domain/building.model';
import { SHCTenant } from '../Models/Domain/shc-tenant.model';

export class RandomDataGenerator {
  static cardholders(amount: number): Cardholder[] {
    const db: Cardholder[] = [];
    const genders = ['male', 'female'];

    for (let i = 1; i <= amount; i++) {
        const cardholder = new Cardholder;
        cardholder.id = faker.random.uuid();

        const fName = faker.name.firstName();
        const lName = faker.name.lastName();

        cardholder.firstName = fName;
        cardholder.lastName = lName;
        cardholder.fullName = fName + ' ' + lName;
        cardholder.gender = genders[faker.random.number(1)];
        cardholder.identificationNo = faker.random.alphaNumeric(12);
        cardholder.nationality = faker.address.country();
        cardholder.identificationType = faker.random.objectElement(IdentificationType);
        cardholder.status = faker.random.objectElement(CardUserStatus);
        cardholder.address = faker.address.streetAddress();
        cardholder.state = faker.address.state();
        cardholder.city = faker.address.city();
        cardholder.dateOfBirth = faker.date.past(80);
        cardholder.email = faker.internet.email(fName, lName);
        cardholder.phone = faker.phone.phoneNumber();

        db.push(cardholder);
    }

    return db;
  }

  static businessUnits(amount: number): BusinessUnit[] {
    const db: BusinessUnit[] = [];

    for (let i = 1; i <= amount; i++) {
        const businessUnit = new BusinessUnit;
        businessUnit.id = faker.random.uuid();
        businessUnit.description = faker.lorem.sentence();
        businessUnit.name = faker.commerce.department();
        businessUnit.cardTypes = faker.random.arrayElement(this.cardTypes);
        businessUnit.companies = this.companies(faker.random.number(5));

        db.push(businessUnit);
    }

    return db;
  }

  static cardTypes(): CardType[] {
    const cardTypes: CardType[] = [];

    const individual = new CardType();
    individual.id = faker.random.uuid(),
    individual.isPermanent = false,
    individual.name = 'Individual Cards',
    individual.cardType = SHCCardType.INDIVIDUAL;

    const tenant = new CardType();
    tenant.id = faker.random.uuid(),
    tenant.isPermanent = false,
    tenant.name = 'Tenant Cards',
    tenant.cardType = SHCCardType.TENANT;

    const strata = new CardType();
    strata.id = faker.random.uuid();
    strata.isPermanent = false;
    strata.name = 'Strata Cards';
    strata.cardType = SHCCardType.STRATA;

    const employee = new CardType();
    employee.id = faker.random.uuid();
    employee.isPermanent = false;
    employee.name = 'Employee Cards';
    employee.cardType = SHCCardType.EMPLOYEE;

    cardTypes.push(individual);
    cardTypes.push(tenant);
    cardTypes.push(strata);
    cardTypes.push(employee);

    return cardTypes;
  }

  static companies(amount: number): Company[] {
    const db: Company[] = [];

    for (let i = 1; i <= amount; i++) {
      const company = new Company;
      company.id = faker.random.uuid();
      company.businessUnits = this.businessUnits(faker.random.number(3));
      company.name = faker.company.companyName();
      company.code = faker.random.alphaNumeric();

      db.push(company);
    }

    return db;
  }

  static personalisationRequests(amount: number): SOAPersonalizationRequest[] {
    const db: SOAPersonalizationRequest[] = [];

    const cardholder = this.cardholders(1)[0];

    for (let i = 1; i <= amount; i++) {
      const request = new SOAPersonalizationRequest;
      request.id = faker.random.uuid();
      request.cardholderId = cardholder.id;
      request.cardholder = cardholder.fullName;
      request.cardType = faker.random.arrayElement(this.cardTypes);
      request.cardInventoryNo = faker.random.alphaNumeric(6);
      request.contractNo = faker.random.alphaNumeric(25);
      request.identificationType = cardholder.identificationType;
      request.requestDate = faker.date.past();
      request.requestId = faker.random.uuid();
      request.personalizationStatus = faker.random.objectElement(RequestStatus);

      db.push(request);
    }

    return db;
  }

  static replacementRequests(amount: number): SOAReplaceCardRequest[] {
    const db: SOAReplaceCardRequest[] = [];

    const cardholder = this.cardholders(1)[0];

    for (let i = 1; i <= amount; i++) {
      const request = new SOAReplaceCardRequest;
      request.id = faker.random.uuid();
      request.cardholderId = cardholder.id;
      request.cardholder = cardholder.fullName;
      request.requestedDate = faker.date.past();
      request.requestStatus = faker.random.objectElement(RequestStatus);
      request.replacementReason = faker.lorem.paragraph();

      db.push(request);
    }

    return db;
  }

  static distributionRequests(amount: number): SOACardRequest[] {
    const db: SOACardRequest[] = [];

    const bu = this.businessUnits(1)[0];
    const cardholder = this.cardholders(1)[0];

    for (let i = 1; i <= amount; i++) {
      const request = new SOACardRequest;
      request.id = faker.random.uuid();
      request.businessUnit = bu.name;
      request.businessUnitId = bu.id;
      request.quantity = faker.random.number(50);
      request.requestDate = faker.date.past();
      request.requestedBy = faker.name.findName();
      request.requestId = faker.random.uuid();
      request.cardType = faker.random.objectElement(this.cardTypes());

      db.push(request);
    }

    return db;
  }

  static cardVendors(amount: number): CardVendor[] {
    const db: CardVendor[] = [];

    for (let i = 1; i <= amount; i++) {
      const vendor = new CardVendor;
      vendor.id = faker.random.uuid();
      vendor.address = faker.address.streetAddress();
      vendor.name = faker.company.companyName();
      vendor.phone = faker.phone.phoneNumber();
      vendor.description = faker.company.catchPhrase();

      db.push(vendor);
    }

    return db;
  }

  static buildings(amount: number): Building[] {
    const db: Building[] = [];

    for (let i = 1; i <= amount; i++) {
      const building = new Building;
      building.id = faker.random.uuid();
      building.address = faker.address.streetAddress();
      building.name = faker.company.companyName();
      building.phone = faker.phone.phoneNumber();
      building.contactPerson = faker.name.findName();
      building.email = faker.internet.email();

      db.push(building);
    }

    return db;
  }

  static SHCTenants(amount: number): SHCTenant[] {
    const db: SHCTenant[] = [];

    for (let i = 1; i <= amount; i++) {
      const tenant = new SHCTenant;
      tenant.id = faker.random.uuid();
      tenant.address = faker.address.streetAddress();
      tenant.name = faker.company.companyName();
      tenant.phone = faker.phone.phoneNumber();
      tenant.contactPerson = faker.name.findName();
      tenant.email = faker.internet.email();

      db.push(tenant);
    }

    return db;
  }
}
