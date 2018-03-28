import { Cardholder } from './cardholder.model';
import { Building } from './building.model';
import { SHCTenant } from './shc-tenant.model';

export class Tenant extends Cardholder {

  constructor() { super(); this.shcTenant = new SHCTenant(); }

  shcTenant: SHCTenant;
  buildings: Building[];
}
