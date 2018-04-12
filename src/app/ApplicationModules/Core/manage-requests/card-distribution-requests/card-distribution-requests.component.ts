import { FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SOACardRequest } from '../../../../Models/Domain/soa-card-request.model';

import { BaseComponentModals } from '../../../General/base/base-component-modals';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from '../../../../Shared/modal/modal.service';
import { DataSendingService } from '../../../../Services/application/data-sending.service';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';
import { CardRequestsService } from '../../../../Services/card-requests.service';

@Component({
  selector: 'app-card-distribution-requests',
  templateUrl: './card-distribution-requests.component.html',
  styleUrls: ['./card-distribution-requests.component.css']
})
export class CardDistributionRequestsComponent extends BaseComponentModals<SOACardRequest> implements OnInit, OnDestroy {

  deleteObjectModal = 'deleteCardDistributionRequest';
  objectDetailsModal = 'cardDistributionRequestDetails';
  listFilter: any;
  subscription: Subscription;

  constructor(service: CardRequestsService, modalService: ModalService,
    protected spinner: Ng4LoadingSpinnerService, toaster: AppToasterServiceService,
    protected dataService: DataSendingService, fb: FormBuilder) {
      super(spinner, service, toaster, modalService, fb);
      this.subscription = this.dataService.getObject1Data.subscribe(x => { this.listFilter = x; });
     }

  ngOnInit() {
    this.loadAll();
  }

  createForm() {

  }

  viewObject(request: SOACardRequest) {

  }

  ngOnDestroy(): void {
    this.dataService.clearData();
    this.subscription.unsubscribe();
  }

}
