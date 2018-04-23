import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Building } from '../../../../../Models/Domain/building.model';
import { Tenant } from '../../../../../Models/Domain/tenant.model';

import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { DataPassingService } from '../../../../../Services/application/data-passing.service';
import { BuildingService } from '../../../../../Services/building.service';
import { SHCTenant } from '../../../../../Models/Domain/shc-tenant.model';
import { ShcTenantsService } from '../../../../../Services/shc-tenants.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.css']
})
export class CreateTenantComponent implements OnInit {

  buildingsFilter;
  registrationForm: FormGroup;
  cardholder = new Tenant();
  allTenants: SHCTenant[] = [];
  allBuildings: Building[] = [];
  selectedBuildings: Building[] = [];

  constructor(private router: Router, private dataService: DataPassingService, private fb: FormBuilder,
    private toaster: AppToasterServiceService, private spinner: Ng4LoadingSpinnerService,
    private buildingService: BuildingService, private tenantsService: ShcTenantsService) {
      this.createRegistrationForm();
     }

  ngOnInit() {
    this.loadAll();

    if (this.dataService.objectToSend) {
      this.cardholder = this.dataService.objectToSend;
      this.loadCardholderDetails(this.dataService.objectToSend);
    }
  }

  loadAll() {
    this.spinner.show();
    this.getBuildings();
    this.getTenants();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      tenant: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  loadCardholderDetails(tenant: Tenant): void {
    this.registrationForm.patchValue({
      tenant: tenant.shcTenant.id,
    });
  }

  getBuildings(): void {
    this.buildingService.getAll().subscribe((buildings: Building[]) => {
      this.allBuildings = buildings;
      this.cardholder.buildings.forEach(o => this.processBuildingSelection(o, true));

      this.spinner.hide();
    }, (err) => {
      this.spinner.hide();

      this.toaster.errorToast(err.message);
    });
  }

  getTenants() {
    this.tenantsService.getAll<SHCTenant>().subscribe(tenants => {
      this.allTenants = tenants;

      this.spinner.hide();
    }, err => {
      this.spinner.hide();

      this.toaster.errorToast(err.message);
    }
  );
  }

  getTenant(id: string): SHCTenant {
    return this.allTenants.filter(c => c.id === id)[0];
  }

  processBuildingSelection(building: Building, isSelected) {
    const refIndex = this.allBuildings.findIndex(o => o.id === building.id);

    if (isSelected && refIndex !== -1) {
      this.allBuildings[refIndex].isSelected = true;
      this.selectedBuildings.push(building);
    } else {
      const index = this.selectedBuildings.findIndex(o => o.id === building.id);
      if (index !== -1) {
        this.selectedBuildings.splice(index, 1);
      }
      if (refIndex !== -1) {
        this.allBuildings[refIndex].isSelected = false;
      }
    }
  }

  sendCardholderData(data) {
    this.cardholder.buildings = this.selectedBuildings;
    this.cardholder.shcTenant = this.getTenant(data.tenant);

    this.selectedBuildings = [];

    this.router.navigate(['./main/cardholders/create/vehicles']);
  }

}
