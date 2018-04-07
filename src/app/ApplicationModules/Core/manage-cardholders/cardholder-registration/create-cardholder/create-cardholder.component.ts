import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Cardholder } from '../../../../../Models/Domain/cardholder.model';

import { CardholderService } from '../../../../../Services/cardholder.service';
import { DataSendingService } from '../../../../../Services/application/data-sending.service';
import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { DataPassingService } from '../../../../../Services/application/data-passing.service';

@Component({
  selector: 'app-create-cardholder',
  templateUrl: './create-cardholder.component.html',
  styleUrls: ['./create-cardholder.component.css']
})
export class CreateCardholderComponent implements OnInit, OnDestroy {

  registrationForm: FormGroup;
  cardholder = new Cardholder();
  stringToSend = '';

  constructor(private router: Router, private fb: FormBuilder,
    private dataService: DataPassingService,
    private toaster: AppToasterServiceService) {
      this.createRegistrationForm();
    }

  ngOnInit() {
    if (this.dataService.objectToSend) {
      this.cardholder = this.dataService.objectToSend;
    }
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userType: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      preferredName: ['', [Validators.required, Validators.minLength(1)]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required, Validators.minLength(1)]],
      identificationNumber: ['', [Validators.required, Validators.minLength(1)]],
      identificationType: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      contactDetails: this.fb.group({
        streetAddress: ['', [Validators.required, Validators.minLength(1)]],
        state: ['', [Validators.required, Validators.minLength(1)]],
        zipCode: ['', [Validators.required, Validators.minLength(1)]],
        handPhone: ['', [Validators.required, Validators.minLength(1)]],
        workPhone: ['', [Validators.required, Validators.minLength(1)]],
        primaryEmail: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
        workEmail: ['', [Validators.required, Validators.email, Validators.minLength(1)]]
      })
    });
  }

  sendCardholderData(data) {
    try {

      if (data.userType == null || data.userType === '') {
        throw new Error('Please, select a User type');
      }

      this.cardholder.firstName = data.firstName;
      this.cardholder.lastName = data.lastName;
      this.cardholder.gender = data.gender;
      this.cardholder.address = data.streetAddress;
      this.cardholder.email = data.primaryEmail;
      // this.cardholder.dateOfBirth = data.dateOfBirth;
      this.cardholder.identificationNo = data.identificationNumber;
      this.cardholder.nationality = data.nationality;
      this.cardholder.phone = data.handPhone;
      this.cardholder.state = data.state;
      this.cardholder.workEmail = data.workEmail;
      this.cardholder.workPhone = data.workPhone;

      if (data.userType === 'employee') {
        this.stringToSend = './main/cardholders/create/employee';
        this.router.navigate([this.stringToSend]);
      } else if (data.userType === 'tenant') {
        this.stringToSend = './main/cardholders/create/tenant';
        this.router.navigate([this.stringToSend]);
      } else if (data.userType === 'individual') {
        this.router.navigate(['./main/cardholders/create/vehicles']);
      }
    } catch (e) {
      this.toaster.errorToast(e.message);
    }
  }

  ngOnDestroy(): void {
    this.dataService.objectToSend = this.cardholder;
    this.dataService.stringToSend = this.stringToSend;
  }
}
