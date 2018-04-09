import { FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { BuildingService } from './../../../Services/building.service';
import { Component, OnInit, Input } from '@angular/core';
import { Building } from '../../../Models/Domain/building.model';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BaseComponentModals } from '../../General/base/base-component-modals';
import { ModalService } from './../../../Shared/modal/modal.service';

@Component({
  selector: 'app-manage-building',
  templateUrl: './manage-building.component.html',
  styleUrls: ['./manage-building.component.css']
})
export class ManageBuildingComponent extends BaseComponentModals<Building> implements OnInit {

  objectDetailsModal = 'buildingDetails';

  constructor(spinnerService: Ng4LoadingSpinnerService, buildingService: BuildingService,
    toaster: AppToasterServiceService, modalService: ModalService, fb: FormBuilder) {
      super(spinnerService, buildingService, toaster, modalService, fb);
    }

  ngOnInit() {
    this.loadAll();
  }

  createForm() {

  }

  viewObject(vendor: Building): void {
    this.openModal('update');
  }

  processFormData(create: boolean, data) {}

}
