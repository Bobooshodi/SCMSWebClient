import { FormBuilder, Validators } from '@angular/forms';
import { BaseStatusHistory } from './../../../Models/base-status-history.model';
import { Component, OnInit } from '@angular/core';

import { Card } from '../../../Models/Domain/card.model';

import { BaseComponentTabsAndModal } from '../../General/base/base-component-tabs-and-modal';

import { CardService } from '../../../Services/card.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from '../../../Shared/modal/modal.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.css']
})
export class ManageCardsComponent extends BaseComponentTabsAndModal<Card> implements OnInit {

  deleteObjectModal = 'deleteCard';
  objectDetailsModal = 'cardDetails';

  constructor(spinnerService: Ng4LoadingSpinnerService, cardService: CardService, fb: FormBuilder,
    toaster: AppToasterServiceService, modalService: ModalService) {
      super(spinnerService, cardService, toaster, modalService, fb);
    }

  ngOnInit() {
    this.loadAll();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      reason: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  viewObject(card: Card) {
    this.selectedObject = card;

    this.openModal('remove');
  }

  processFormData(data) {
    if (data) {
    }

    this.closeModal();
  }

  protected filterList(param: string) {
    this.currentTypeTab = param;

    if (param !== 'all') {
      this.filteredList = this.mainList.filter(c => c.cardType.toLowerCase() === param);
    } else {
      this.filteredList = this.mainList;
    }
  }

}
