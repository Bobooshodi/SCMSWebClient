import { Component, OnInit } from '@angular/core';

import { Card } from '../../../../Models/Domain/card.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CardService } from '../../../../Services/card.service';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';

@Component({
  selector: 'app-cards-dashboard',
  templateUrl: './cards-dashboard.component.html',
  styleUrls: ['./cards-dashboard.component.css']
})
export class CardsDashboardComponent implements OnInit {

  allCards: Card[] = [];
  employeeCards: Card[] = [];
  individualCards: Card[] = [];
  tenantCards: Card[] = [];
  strataCards: Card[] = [];
  phantomCards: Card[] = [];

  constructor(private spinnerService: Ng4LoadingSpinnerService, private cardService: CardService,
   private toaster: AppToasterServiceService) { }

  ngOnInit() {
    this.loadAllCards();
  }

  loadAllCards() {
    this.spinnerService.show();

    this.cardService.getAll().subscribe((cards: Card[]) => {
      this.allCards = cards;
      this.employeeCards = cards.filter(e => e.cardType.toLowerCase() === 'employee');
      this.tenantCards = cards.filter(e => e.cardType.toLowerCase() === 'tenant');
      this.individualCards = cards.filter(e => e.cardType.toLowerCase() === 'individual');
      this.strataCards = cards.filter(e => e.cardType.toLowerCase() === 'strata');

      this.spinnerService.hide();
    },
    err => {
      this.spinnerService.hide();
      this.toaster.errorToast(err.message);
      console.log(err);
    }
  );
  }

}
