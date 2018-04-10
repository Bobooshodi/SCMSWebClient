import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { DataSendingService } from '../../../../../Services/application/data-sending.service';
import { ReplaceCardRequestsComponent } from '../../../manage-requests/replace-card-requests/replace-card-requests.component';
import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { CardReplacementRequestsService } from '../../../../../Services/card-replacement-requests.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from '../../../../../Shared/modal/modal.service';

@Component({
  selector: 'app-replacement-requests-dashboard',
  templateUrl: './replacement-requests-dashboard.component.html',
  styleUrls: ['./replacement-requests-dashboard.component.css']
})
export class ReplacementRequestsDashboardComponent extends ReplaceCardRequestsComponent implements OnInit, OnDestroy {

  constructor(service: CardReplacementRequestsService, modalService: ModalService,
    spinner: Ng4LoadingSpinnerService, toaster: AppToasterServiceService,
    dataService: DataSendingService, fb: FormBuilder) {
    super(service, modalService, spinner, toaster, dataService, fb);
    this.subscription = this.dataService.getObject1Data.subscribe(x => { this.listFilter = x; });
  }

  ngOnInit() {
    this.loadAll();
  }

  ngOnDestroy(): void {
    this.dataService.clearData();
    this.subscription.unsubscribe();
  }
}
