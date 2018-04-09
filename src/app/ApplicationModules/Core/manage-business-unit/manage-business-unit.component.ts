import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { BusinessUnit } from '../../../Models/Domain/business-unit.model';

import { BaseComponentModals } from '../../General/base/base-component-modals';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from './../../../Shared/modal/modal.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BusinessUnitsService } from '../../../Services/business-units.service';

@Component({
  selector: 'app-manage-business-unit',
  templateUrl: './manage-business-unit.component.html',
  styleUrls: ['./manage-business-unit.component.css']
})
export class ManageBusinessUnitComponent extends BaseComponentModals<BusinessUnit> implements OnInit {

  objectDetailsModal = 'businessUnitDetails';

  constructor(toaster: AppToasterServiceService, spinner: Ng4LoadingSpinnerService,
    service: BusinessUnitsService, modalService: ModalService, fb: FormBuilder) {
    super(spinner, service, toaster, modalService, fb);
  }

  ngOnInit() {
    this.loadAll();
  }

  createForm() {
  }

  viewObject(vendor: BusinessUnit): void {
  }

  processFormData(create: boolean, data) {}

}
