import { FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonalizationRequestsComponent } from '../../../manage-requests/personalization-requests/personalization-requests.component';
import { PersonalisationRequestsService } from '../../../../../Services/personalisation-requests.service';
import { ModalService } from '../../../../../Shared/modal/modal.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../../../Services/common/app-toaster-service.service';
import { DataSendingService } from '../../../../../Services/application/data-sending.service';
import { DashboardDataSending } from '../../../../../Services/application/dashboard-data-sending';

@Component({
  selector: 'app-personalisation-requests-dashboard',
  templateUrl: './personalisation-requests-dashboard.component.html',
  styleUrls: ['./personalisation-requests-dashboard.component.css']
})
export class PersonalisationRequestsDashboardComponent extends PersonalizationRequestsComponent implements OnInit, OnDestroy {

  listFilter;
  subscription;

  constructor(service: PersonalisationRequestsService, modalService: ModalService, fb: FormBuilder,
    spinner: Ng4LoadingSpinnerService, toaster: AppToasterServiceService, dataService: DashboardDataSending) {
      super(service, modalService, fb, spinner, toaster, dataService);
      this.subscription = this.dataService.getObject2Data.subscribe(x => { console.log(x); this.listFilter = x; });
    }

  ngOnInit() {
    this.loadAll();
  }

  ngOnDestroy(): void {
    this.dataService.clearData();
    this.subscription.unsubscribe();
  }

}
