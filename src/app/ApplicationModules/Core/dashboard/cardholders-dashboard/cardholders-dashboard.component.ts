import { Component, OnInit } from '@angular/core';

import { Cardholder } from '../../../../Models/Domain/cardholder.model';
import { SHCCardType } from '../../../../Models/Enums/shc-card-type.enum';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CardholderService } from '../../../../Services/cardholder.service';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';

@Component({
  selector: 'app-cardholders-dashboard',
  templateUrl: './cardholders-dashboard.component.html',
  styleUrls: ['./cardholders-dashboard.component.css']
})
export class CardholdersDashboardComponent implements OnInit {

  allCardholders: Cardholder[] = [];
  employees: Cardholder[] = [];
  tenants: Cardholder[] = [];
  individuals: Cardholder[] = [];
  strata: Cardholder[] = [];

  constructor(private spinnerService: Ng4LoadingSpinnerService, private cardholderService: CardholderService,
     private toaster: AppToasterServiceService) { }

  ngOnInit() {
    this.loadAllCardholders();
  }

  loadAllCardholders() {
    this.spinnerService.show();

    this.cardholderService.getAll().subscribe((cardholders: Cardholder[]) => {
      this.allCardholders = cardholders;
      this.employees = cardholders.filter(e => e.userType === SHCCardType.EMPLOYEE);
      this.tenants = cardholders.filter(e => e.userType === SHCCardType.TENANT);
      this.individuals = cardholders.filter(e => e.userType === SHCCardType.INDIVIDUAL);
      this.strata = cardholders.filter(e => e.userType === SHCCardType.STRATA);

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
