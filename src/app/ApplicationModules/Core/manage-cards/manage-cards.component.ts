import { FormBuilder } from '@angular/forms';
import { BaseStatusHistory } from './../../../Models/base-status-history.model';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../../Models/Domain/card.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CardService } from '../../../Services/card.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BaseComponentTabs } from '../../General/base/base-component-tabs';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.css']
})
export class ManageCardsComponent extends BaseComponentTabs<Card> implements OnInit {

  constructor(protected spinnerService: Ng4LoadingSpinnerService, protected cardService: CardService,
    protected toaster: AppToasterServiceService) {
      super(spinnerService, cardService, toaster);
    }

  ngOnInit() {
    this.loadAll();
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
