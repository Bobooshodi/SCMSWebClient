import { Component, OnInit } from '@angular/core';
import { ManageCardsComponent } from '../manage-cards/manage-cards.component';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { CardService } from '../../../Services/card.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from './../../../Shared/modal/modal.service';

@Component({
  selector: 'app-card-inventory',
  templateUrl: './card-inventory.component.html',
  styleUrls: ['./card-inventory.component.css']
})
export class CardInventoryComponent extends ManageCardsComponent implements OnInit {

  constructor(spinnerService: Ng4LoadingSpinnerService, cardService: CardService,
    toaster: AppToasterServiceService, modalService: ModalService) {
    super(spinnerService, cardService, toaster, modalService);
  }

  ngOnInit() {
    this.loadAll();
  }

}
