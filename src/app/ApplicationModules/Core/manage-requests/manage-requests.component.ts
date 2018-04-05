import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrls: ['./manage-requests.component.css']
})
export class ManageRequestsComponent implements OnInit, OnDestroy {

  filter;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
  }

  sendFilterData(data: string) {
    this.dataService.sendData(data);
  }

  ngOnDestroy(): void {
    this.dataService.clearData();
  }

}
