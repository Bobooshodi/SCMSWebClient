import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataSendingService } from '../../../Services/application/data-sending.service';


@Component({
  selector: 'app-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrls: ['./manage-requests.component.css']
})
export class ManageRequestsComponent implements OnInit, OnDestroy {

  filter;

  constructor(private dataService: DataSendingService) {

  }

  ngOnInit() {
  }

  sendFilterData(data: string) {
    this.dataService.sendObject1Data(data);
  }

  ngOnDestroy(): void {
    this.dataService.clearData();
  }

}
