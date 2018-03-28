import { Cardholder } from './cardholder.model';
import { Company } from './company.model';
import { Building } from './building.model';

export class Employee extends Cardholder {

  constructor() { super(); this.company = new Company(); }

  contractId: string;
  designation: string;
  employeeId: string;
  company: Company;
  buildings: Building[];
}
