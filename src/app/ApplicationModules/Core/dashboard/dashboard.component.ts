import { Component, OnInit } from '@angular/core';
import { Card } from '../../../Models/Domain/card.model';
import { Cardholder } from '../../../Models/Domain/cardholder.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CardService } from '../../../Services/card.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { SHCCardType } from '../../../Models/Enums/shc-card-type.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService, private cardService: CardService,
    private cardholderService: CardService, private toaster: AppToasterServiceService) { }

  ngOnInit() {
  }

}
