import { HttpErrorResponse } from '@angular/common/http';
import { BuildingService } from './../../../Services/building.service';
import { Component, OnInit, Input } from '@angular/core';
import { Building } from '../../../Models/Domain/building.model';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BaseComponent } from '../../General/base/base.component';
import { ModalService } from './../../../Shared/modal/modal.service';

@Component({
  selector: 'app-manage-building',
  templateUrl: './manage-building.component.html',
  styleUrls: ['./manage-building.component.css']
})
export class ManageBuildingComponent extends BaseComponent<Building> implements OnInit {

  constructor(spinnerService: Ng4LoadingSpinnerService, buildingService: BuildingService,
    toaster: AppToasterServiceService, modalService: ModalService) {
      super(spinnerService, buildingService, toaster, modalService);
    }

  ngOnInit() {
    this.loadAll();
  }

  protected filterList(param: any) {
    throw new Error('Method not implemented.');
  }

  viewObject(vendor: Building): void {
  }

}
