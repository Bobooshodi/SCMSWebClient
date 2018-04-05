import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SOACardRequest } from '../../../../Models/Domain/soa-card-request.model';

import { BaseComponent } from '../../../General/base/base.component';

import { DataService } from '../data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from '../../../../Shared/modal/modal.service';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';
import { CardRequestsService } from '../../../../Services/card-requests.service';

@Component({
  selector: 'app-card-distribution-requests',
  templateUrl: './card-distribution-requests.component.html',
  styleUrls: ['./card-distribution-requests.component.css']
})
export class CardDistributionRequestsComponent extends BaseComponent<SOACardRequest> implements OnInit, OnDestroy {

  listFilter: any;
  subscription: Subscription;

  constructor(service: CardRequestsService, modalService: ModalService,
    private spinner: Ng4LoadingSpinnerService, toaster: AppToasterServiceService,
    private dataService: DataService) {
      super(spinner, service, toaster, modalService);
      this.subscription = this.dataService.getData().subscribe(x => { this.listFilter = x; });
     }

  ngOnInit() {
    this.loadAll();
  }

  ngOnDestroy(): void {
    this.dataService.clearData();
    this.subscription.unsubscribe();
  }

}
