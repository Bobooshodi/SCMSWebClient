import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { DataSendingService } from '../../../../Services/application/data-sending.service';

@Component({
  selector: 'app-cardholder-registration',
  templateUrl: './cardholder-registration.component.html',
  styleUrls: ['./cardholder-registration.component.css']
})
export class CardholderRegistrationComponent implements OnInit {

  constructor(private dataSendingService: DataSendingService) {
   }

  ngOnInit() {
  }
}
