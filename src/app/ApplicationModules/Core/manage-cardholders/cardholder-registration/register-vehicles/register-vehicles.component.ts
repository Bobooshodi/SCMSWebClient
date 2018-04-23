import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataPassingService } from '../../../../../Services/application/data-passing.service';
import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { Cardholder } from '../../../../../Models/Domain/cardholder.model';
import { SHCCardType } from '../../../../../Models/Enums/shc-card-type.enum';
import { BaseComponentModals } from '../../../../General/base/base-component-modals';
import { Vehicle } from '../../../../../Models/Domain/vehicle.model';
import { VehicleService } from '../../../../../Services/vehicle.service';
import { ModalService } from '../../../../../Shared/modal/modal.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-register-vehicles',
  templateUrl: './register-vehicles.component.html',
  styleUrls: ['./register-vehicles.component.css']
})
export class RegisterVehiclesComponent extends BaseComponentModals<Vehicle>
  implements OnInit, OnDestroy {
  deleteObjectModal = 'deleteVehicles';
  objectDetailsModal = 'vehicleDetails';
  vehicleRegistrationForm: FormGroup;
  cardholder;
  showFallbackPageLink = false;
  fallbackLink = '';
  fallbackPageTitle = 'Other Details';
  deleteWarningMessage = '';

  constructor(
    router: Router,
    fb: FormBuilder,
    service: VehicleService,
    modalService: ModalService,
    spinner: Ng4LoadingSpinnerService,
    toaster: AppToasterServiceService,
    private dataService: DataPassingService,
  ) {
    super(spinner, service, toaster, modalService, fb);
  }

  ngOnInit() {
    this.createForm();
    this.getData();
  }

  createForm() {
    this.form = this.fb.group({});
  }

  viewObject(vehicle: Vehicle) {
    this.selectedObject = vehicle;

    this.deleteWarningMessage = `Are you sure you want to delete ${this.selectedObject.vehicleModel}
                                ${this.selectedObject.numberPlate}`;
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
        this.fallbackLink = '../employee';
        break;

      case SHCCardType.TENANT:
        this.showFallbackPageLink = true;
        this.fallbackPageTitle = 'Tenant Details';
        this.fallbackLink = '../tenant';
    }
  }

  getData() {
    if (this.dataService.objectToSend) {
      this.cardholder = this.dataService.objectToSend;
    }
    if (this.dataService.stringToSend) {
      this.fallbackLink = this.dataService.stringToSend;
    }

    if (this.cardholder) {
      this.getFallbackPageTitle();
    }
  }

  processFormData(data) {
    if (data) {
    } else {
      this.closeModal();
    }
  }

  processResponse(response: boolean) {
    if (response === true) {
    } else {
      this.closeModal();
    }
  }

  ngOnDestroy(): void {
    this.dataService.objectToSend = this.cardholder;
  }
}
