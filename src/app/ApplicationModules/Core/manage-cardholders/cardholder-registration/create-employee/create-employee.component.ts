import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Employee } from '../../../../../Models/Domain/employee.model';
import { Cardholder } from '../../../../../Models/Domain/cardholder.model';

import { DataSendingService } from '../../../../../Services/application/data-sending.service';
import { DataPassingService } from '../../../../../Services/application/data-passing.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { Building } from '../../../../../Models/Domain/building.model';
import { BuildingService } from '../../../../../Services/building.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {

  registrationForm: FormGroup;
  cardholder = new Employee();
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
      console.log(this.cardholder);
    }

    this.getBuildings();
  }

  getBuildings(): void {
    this.buildingService.getAll().subscribe((buildings: Building[]) => {
      this.allBuildings = buildings;
    }, (err) => {
      console.log(err);

      this.toaster.errorToast(err.message);
    });
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      employeeId: ['', [Validators.required, Validators.minLength(1)]],
      companyName: ['', [Validators.required, Validators.minLength(1)]],
      department: ['', [Validators.required, Validators.minLength(1)]],
      designation: ['', [Validators.required, Validators.minLength(1)]],
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
    this.cardholder.buildings = this.selectedBuildings;
    this.cardholder.company = data.company;
    this.cardholder.designation = data.designation;

    console.log(this.cardholder);

    this.router.navigate(['./main/cardholders/create/vehicles']);
  }

  ngOnDestroy(): void {
    this.dataService.objectToSend = this.cardholder;
    this.dataService.stringToSend = 'Employee Details';
  }
}
