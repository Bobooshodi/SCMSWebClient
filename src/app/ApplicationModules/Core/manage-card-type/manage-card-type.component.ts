import { Component, OnInit } from '@angular/core';

import { CardTypeService } from './../../../Services/card-type.service';

@Component({
  selector: 'app-manage-card-type',
  templateUrl: './manage-card-type.component.html',
  styleUrls: ['./manage-card-type.component.css']
})
export class ManageCardTypeComponent implements OnInit {

  constructor(private service: CardTypeService) { }

  ngOnInit() {
  }

}
