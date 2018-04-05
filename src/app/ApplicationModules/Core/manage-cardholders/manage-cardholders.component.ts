import { Component, OnInit } from '@angular/core';

import { Cardholder } from '../../../Models/Domain/cardholder.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { CardholderService } from '../../../Services/cardholder.service';
import { SHCCardType } from '../../../Models/Enums/shc-card-type.enum';
import { BaseComponent } from '../../General/base/base.component';
import { ModalService } from './../../../Shared/modal/modal.service';

@Component({
  selector: 'app-manage-cardholders',
  templateUrl: './manage-cardholders.component.html',
  styleUrls: ['./manage-cardholders.component.css']
})
export class ManageCardholdersComponent extends BaseComponent<Cardholder> implements OnInit {

  currentTypeTab = 10;

  constructor(spinnerService: Ng4LoadingSpinnerService, cardholderService: CardholderService,
    toaster: AppToasterServiceService, modalService: ModalService) {
      super(spinnerService, cardholderService, toaster, modalService);
    }

  ngOnInit() {
    this.loadAll();
  }

  protected filterList(param: any) {
    this.currentTypeTab = param;

    if (param !== 10) {
      this.filteredList = this.mainList.filter(c => c.userType === param);
    } else {
      this.filteredList = this.mainList;
    }
  }

}
