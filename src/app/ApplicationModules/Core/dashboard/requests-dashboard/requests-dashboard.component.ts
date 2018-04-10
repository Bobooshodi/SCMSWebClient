import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataSendingService } from '../../../../Services/application/data-sending.service';
import { DashboardDataSending } from '../../../../Services/application/dashboard-data-sending';

@Component({
  selector: 'app-requests-dashboard',
  templateUrl: './requests-dashboard.component.html',
  styleUrls: ['./requests-dashboard.component.css']
})
export class RequestsDashboardComponent implements OnInit, OnDestroy {

  filter;

  constructor(private dataService: DashboardDataSending) { }

  ngOnInit() {
  }

  sendFilterData(data: string) {
    console.log(data);
    this.dataService.sendObject2Data(data);
  }

  ngOnDestroy(): void {
    this.dataService.clearData();
  }

}
