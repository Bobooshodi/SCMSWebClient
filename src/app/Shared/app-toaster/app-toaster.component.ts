import { Component, OnInit } from '@angular/core';

import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-app-toaster',
  templateUrl: './app-toaster.component.html',
  styleUrls: ['./app-toaster.component.css']
})
export class AppToasterComponent implements OnInit {

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
  }

  popToast() {
    this.toasterService.pop('success', 'Args Title', 'Args Body');
  }

}
