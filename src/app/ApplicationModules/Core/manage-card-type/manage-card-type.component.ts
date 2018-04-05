import { Component, OnInit } from '@angular/core';

import { CardTypeService } from './../../../Services/card-type.service';
import { CardType } from '../../../Models/Domain/card-type.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BaseComponent } from '../../General/base/base.component';
import { ModalService } from '../../../Shared/modal/modal.service';

@Component({
  selector: 'app-manage-card-type',
  templateUrl: './manage-card-type.component.html',
  styleUrls: ['./manage-card-type.component.css']
})
export class ManageCardTypeComponent extends BaseComponent<CardType> implements OnInit {

  filter;
  allCardTypes: CardType[];
  filteredCardTypes: CardType[];

  constructor(service: CardTypeService, spinner: Ng4LoadingSpinnerService,
    toaster: AppToasterServiceService, modalService: ModalService) {
      super(spinner, service, toaster, modalService);
    }

  ngOnInit() {
    this.loadAll();
  }

}
