import { Role } from './role.model';
import { BusinessUnit } from './business-unit.model';

export class UserInfo {
  UserId: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  UserName: string;
  Roles: Role[];
  Active: boolean;
  BusinessUnits: BusinessUnit[];
}
