import { Component, OnInit, Input } from '@angular/core';

import { BusinessUnit } from '../../../Models/Domain/business-unit.model';

import { BaseComponent } from '../../General/base/base.component';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from './../../../Shared/modal/modal.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BusinessUnitsService } from '../../../Services/business-units.service';

@Component({
  selector: 'app-manage-business-unit',
  templateUrl: './manage-business-unit.component.html',
  styleUrls: ['./manage-business-unit.component.css']
})
export class ManageBusinessUnitComponent extends BaseComponent<BusinessUnit> implements OnInit {

  constructor(toaster: AppToasterServiceService, spinner: Ng4LoadingSpinnerService,
    service: BusinessUnitsService, modalService: ModalService) {
    super(spinner, service, toaster, modalService);
  }

  ngOnInit() {
    this.loadAll();
  }

  viewObject(vendor: BusinessUnit): void {
  }

}
