import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

import { Cardholder } from '../../../../../Models/Domain/cardholder.model';

import { CardholderService } from '../../../../../Services/cardholder.service';
import { DataSendingService } from '../../../../../Services/application/data-sending.service';
import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { DataPassingService } from '../../../../../Services/application/data-passing.service';
import { SHCCardType } from '../../../../../Models/Enums/shc-card-type.enum';

@Component({
  selector: 'app-create-cardholder',
  templateUrl: './create-cardholder.component.html',
  styleUrls: ['./create-cardholder.component.css']
})
export class CreateCardholderComponent implements OnInit, OnDestroy {
  registrationForm: FormGroup;
  cardholder;
  stringToSend = '';
  maxDate = new Date();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: CardholderService,
    private dataService: DataPassingService,
    private toaster: AppToasterServiceService
  ) {
    this.createRegistrationForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.service.get<Cardholder>(params.id).subscribe(resp => {
          this.cardholder = resp;
          this.loadCardholderDetails(resp);
        });
      } else {
        if (this.dataService.objectToSend) {
          this.cardholder = this.dataService.objectToSend;
          this.loadCardholderDetails(this.dataService.objectToSend);
        }
      }
    }
  );
  }

  loadCardholderDetails(cardholder) {
    try {
      this.registrationForm.patchValue({
        userType: cardholder.userType,
        firstName: cardholder.firstName,
        lastName: cardholder.lastName,
        gender: cardholder.gender.toLowerCase(),
        dateOfBirth: cardholder.dateOfBirth,
        identificationNumber: cardholder.identificationNo,
        identificationType: cardholder.identificationType,
        nationality: cardholder.nationality,
        contactDetails: {
          streetAddress: cardholder.address,
          state: cardholder.state,
          handPhone: cardholder.phone,
          workPhone: cardholder.workPhone,
          primaryEmail: cardholder.email,
          workEmail: cardholder.workEmail
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userType: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      preferredName: ['', [Validators.required, Validators.minLength(1)]],
      gender: ['', [Validators.required]],
      dateOfBirth: [new Date(), [Validators.required, Validators.minLength(1)]],
      identificationNumber: [
        '',
        [Validators.required, Validators.minLength(1)]
      ],
      identificationType: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      contactDetails: this.fb.group({
        streetAddress: ['', [Validators.required, Validators.minLength(1)]],
        state: ['', [Validators.required, Validators.minLength(1)]],
        zipCode: ['', [Validators.required, Validators.minLength(1)]],
        handPhone: ['', [Validators.required, Validators.minLength(1)]],
        workPhone: ['', [Validators.required, Validators.minLength(1)]],
        primaryEmail: [
          '',
          [Validators.required, Validators.email, Validators.minLength(1)]
        ],
        workEmail: [
          '',
          [Validators.required, Validators.email, Validators.minLength(1)]
        ]
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

      if (data.userType === SHCCardType.EMPLOYEE) {
        this.cardholder.userType = SHCCardType.EMPLOYEE;
        this.stringToSend = './main/cardholders/create/employee';
        this.router.navigate([this.stringToSend]);
      } else if (data.userType === SHCCardType.TENANT) {
        this.cardholder.userType = SHCCardType.TENANT;
        this.stringToSend = './main/cardholders/create/tenant';
        this.router.navigate([this.stringToSend]);
      } else if (data.userType === SHCCardType.INDIVIDUAL) {
        this.cardholder.userType = SHCCardType.INDIVIDUAL;
        this.router.navigate(['./main/cardholders/create/vehicles']);
      }

      if (data.userType === SHCCardType.EMPLOYEE.toString()) {
        this.cardholder.userType = SHCCardType.EMPLOYEE;
        this.stringToSend = './main/cardholders/create/employee';
        this.router.navigate([this.stringToSend]);
      } else if (data.userType === SHCCardType.TENANT.toString()) {
        this.cardholder.userType = SHCCardType.TENANT;
        this.stringToSend = './main/cardholders/create/tenant';
        this.router.navigate([this.stringToSend]);
      } else if (data.userType === SHCCardType.INDIVIDUAL.toString()) {
        this.cardholder.userType = SHCCardType.INDIVIDUAL;
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
