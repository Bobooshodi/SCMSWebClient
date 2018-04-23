import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Employee } from '../../../../../Models/Domain/employee.model';
import { Cardholder } from '../../../../../Models/Domain/cardholder.model';

import { DataSendingService } from '../../../../../Services/application/data-sending.service';
import { DataPassingService } from '../../../../../Services/application/data-passing.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { Building } from '../../../../../Models/Domain/building.model';
import { BuildingService } from '../../../../../Services/building.service';
import { EmployeeService } from '../../../../../Services/employee.service';
import { Company } from '../../../../../Models/Domain/company.model';
import { CompanyService } from '../../../../../Services/company.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {
  registrationForm: FormGroup;
  cardholder = new Employee();
  allCompanies: Company[] = [];
  allBuildings: Building[] = [];
  selectedBuildings: Building[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: EmployeeService,
    private companyService: CompanyService,
    private dataService: DataPassingService,
    private buildingService: BuildingService,
    private toaster: AppToasterServiceService,
    private spinner: Ng4LoadingSpinnerService,
  ) {
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
    this.getCompanies();
  }

  loadCardholderDetails(employee: Employee): void {
    this.registrationForm.patchValue({
      employeeId: employee.employeeId,
      companyName: employee.company.id,
      designation: employee.designation
    });
  }

  getBuildings(): void {
    this.buildingService.getAll().subscribe(
      (buildings: Building[]) => {
        this.allBuildings = buildings;
        this.spinner.hide();

        if (this.cardholder.buildings) {
          this.cardholder.buildings.forEach(o => this.processBuildingSelection(o, true));
        }
      },
      err => {
        this.spinner.hide();
        this.toaster.errorToast(err.message);
      }
    );
  }

  getCompanies() {
    this.companyService.getAll<Company>().subscribe(companies => {
      this.allCompanies = companies;

      this.spinner.hide();
    },
    err => {
      this.spinner.hide();

      this.toaster.errorToast(err.message);
    }
  );
  }

  getCompany(id: string): Company {
    return this.allCompanies.filter(c => c.id === id)[0];
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      employeeId: ['', [Validators.required, Validators.minLength(1)]],
      companyName: ['', [Validators.required, Validators.minLength(1)]],
      department: ['', [Validators.required, Validators.minLength(1)]],
      designation: ['', [Validators.required, Validators.minLength(1)]]
    });
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
    this.cardholder.company = this.getCompany(data.companyName);
    this.cardholder.designation = data.designation;

    this.router.navigate(['./main/cardholders/create/vehicles']);
  }

  ngOnDestroy(): void {
    this.dataService.objectToSend = this.cardholder;
    this.selectedBuildings = [];
  }
}
