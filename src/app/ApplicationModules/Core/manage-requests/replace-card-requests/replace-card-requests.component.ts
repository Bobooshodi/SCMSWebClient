import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SOAReplaceCardRequest } from '../../../../Models/Domain/soa-replace-card-request.model';

import { BaseComponent } from '../../../General/base/base.component';

import { DataService } from '../data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from './../../../../Shared/modal/modal.service';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';
import { CardReplacementRequestsService } from '../../../../Services/card-replacement-requests.service';

@Component({
  selector: 'app-replace-card-requests',
  templateUrl: './replace-card-requests.component.html',
  styleUrls: ['./replace-card-requests.component.css']
})
export class ReplaceCardRequestsComponent extends BaseComponent<SOAReplaceCardRequest> implements OnInit, OnDestroy {

  listFilter: any;
  subscription: Subscription;

  constructor(service: CardReplacementRequestsService, modalService: ModalService,
    spinner: Ng4LoadingSpinnerService, toaster: AppToasterServiceService,
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
