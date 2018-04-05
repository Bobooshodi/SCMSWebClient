import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SOAPersonalizationRequest } from '../../../../Models/Domain/soa-personalization-request.model';

import { BaseComponent } from '../../../General/base/base.component';

import { DataService } from '../data.service';
import { ModalService } from '../../../../Shared/modal/modal.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';
import { PersonalisationRequestsService } from '../../../../Services/personalisation-requests.service';

@Component({
  selector: 'app-personalization-requests',
  templateUrl: './personalization-requests.component.html',
  styleUrls: ['./personalization-requests.component.css']
})
export class PersonalizationRequestsComponent extends BaseComponent<SOAPersonalizationRequest> implements OnInit, OnDestroy {

  listFilter: any;
  subscription: Subscription;

  constructor(service: PersonalisationRequestsService, modalService: ModalService,
    spinner: Ng4LoadingSpinnerService, toaster: AppToasterServiceService, private dataService: DataService) {
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
