import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Building } from '../../../../../Models/Domain/building.model';
import { Tenant } from '../../../../../Models/Domain/tenant.model';

import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { DataPassingService } from '../../../../../Services/application/data-passing.service';
import { BuildingService } from '../../../../../Services/building.service';

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.css']
})
export class CreateTenantComponent implements OnInit {

  registrationForm: FormGroup;
  cardholder = new Tenant();
  allBuildings: Building[] = [];
  selectedBuildings: Building[] = [];

  constructor(private router: Router, private dataService: DataPassingService,
    private fb: FormBuilder, private toaster: AppToasterServiceService,
    private buildingService: BuildingService) {
      this.createRegistrationForm();
     }

  ngOnInit() {
    if (this.dataService.objectToSend) {
      this.cardholder = this.dataService.objectToSend;
    }

    this.getBuildings();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      employeeId: ['', [Validators.required, Validators.minLength(1)]],
      companyName: ['', [Validators.required, Validators.minLength(1)]],
      department: ['', [Validators.required, Validators.minLength(1)]],
      designation: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  getBuildings(): void {
    this.buildingService.getAll().subscribe((buildings: Building[]) => {
      this.allBuildings = buildings;
    }, (err) => {
      console.log(err);

      this.toaster.errorToast(err.message);
    });
  }

  processBuildingSelection(building: Building, isChecked: boolean) {
    if (isChecked) {
      this.selectedBuildings.push(building);
    } else {
      const index = this.selectedBuildings.indexOf(building);
      if (index !== -1) {
        this.selectedBuildings.splice(index, 1);
      }
    }
  }

  sendCardholderData(data) {
    this.router.navigate(['./main/cardholders/create/vehicles']);
  }

}
