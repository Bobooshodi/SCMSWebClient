import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardRequestsService } from '../../../../../Services/card-requests.service';
import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { DataSendingService } from '../../../../../Services/application/data-sending.service';
import { FormBuilder } from '@angular/forms';
import { ModalService } from '../../../../../Shared/modal/modal.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// tslint:disable-next-line:max-line-length
import { CardDistributionRequestsComponent } from '../../../manage-requests/card-distribution-requests/card-distribution-requests.component';
import { BuildingService } from '../../../../../Services/building.service';

@Component({
  selector: 'app-distribution-requests-dashboard',
  templateUrl: './distribution-requests-dashboard.component.html',
  styleUrls: ['./distribution-requests-dashboard.component.css']
})
export class DistributionRequestsDashboardComponent extends CardDistributionRequestsComponent implements OnInit, OnDestroy {

  constructor(service: CardRequestsService, modalService: ModalService,
    spinner: Ng4LoadingSpinnerService, toaster: AppToasterServiceService,
    dataService: DataSendingService, fb: FormBuilder, buildingService: BuildingService) {
      super(service, modalService, fb, spinner, toaster, dataService, buildingService);
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
