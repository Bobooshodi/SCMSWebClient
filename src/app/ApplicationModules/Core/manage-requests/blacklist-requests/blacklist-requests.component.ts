import { Component, OnInit } from '@angular/core';
import { BaseComponentModals } from '../../../General/base/base-component-modals';
import { ModalService } from '../../../../Shared/modal/modal.service';
import { FormBuilder } from '@angular/forms';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DataSendingService } from '../../../../Services/application/data-sending.service';
import { Subscription } from 'rxjs/Subscription';
import { CardRequestsService } from '../../../../Services/card-requests.service';
import { SOABlacklistRequest } from '../../../../Models/Domain/soa-blacklist-request.model';

@Component({
  selector: 'app-blacklist-requests',
  templateUrl: './blacklist-requests.component.html',
  styleUrls: ['./blacklist-requests.component.css']
})
export class BlacklistRequestsComponent extends BaseComponentModals<SOABlacklistRequest> implements OnInit {

  deleteObjectModal: 'deleteBlacklistRequest';
  objectDetailsModal: 'blacklistRequestDetails';
  listFilter: any;
  subscription: Subscription;

  constructor(service: CardRequestsService, modalService: ModalService, fb: FormBuilder,
    spinner: Ng4LoadingSpinnerService, toaster: AppToasterServiceService,
    protected dataService: DataSendingService) {
      super(spinner, service, toaster, modalService, fb);
      this.subscription = this.dataService.getObject1Data.subscribe(x => { this.listFilter = x; });
     }

  ngOnInit() {
    this.createForm();
  }

  createForm() {

  }
  viewObject(object: SOABlacklistRequest) {

  }

}
