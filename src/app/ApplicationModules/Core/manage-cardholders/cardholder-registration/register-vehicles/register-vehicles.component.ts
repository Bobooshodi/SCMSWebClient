import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataPassingService } from '../../../../../Services/application/data-passing.service';
import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { Cardholder } from '../../../../../Models/Domain/cardholder.model';
import { SHCCardType } from '../../../../../Models/Enums/shc-card-type.enum';

@Component({
  selector: 'app-register-vehicles',
  templateUrl: './register-vehicles.component.html',
  styleUrls: ['./register-vehicles.component.css']
})
export class RegisterVehiclesComponent implements OnInit {

  vehicleRegistrationForm: FormGroup;
  cardholder;
  showFallbackPageLink = true;
  fallbackLink: string;
  fallbackPageTitle: string;

  constructor(private fb: FormBuilder, private dataService: DataPassingService,
    private toaster: AppToasterServiceService, private router: Router) {
      this.createVehicleRegistrationForm();
    }

  ngOnInit() {
    if (this.dataService.objectToSend) {
      console.log(this.dataService.objectToSend);
      this.cardholder = this.dataService.objectToSend;
    }
    if (this.dataService.stringToSend) {
      console.log(this.dataService.stringToSend);
      this.fallbackLink = this.dataService.stringToSend;
    }

    this.getFallbackPageTitle();
  }

  getFallbackPageTitle() {
    switch (this.cardholder.userType) {
      case SHCCardType.INDIVIDUAL:
      this.showFallbackPageLink = false;
      this.fallbackPageTitle = '';
      break;

      case SHCCardType.EMPLOYEE:
      this.showFallbackPageLink = true;
      this.fallbackPageTitle = 'Employee Details';
      break;

      case SHCCardType.TENANT:
      this.showFallbackPageLink = true;
      this.fallbackPageTitle = 'Tenant Details';
    }
  }

  createVehicleRegistrationForm() {

  }

}
