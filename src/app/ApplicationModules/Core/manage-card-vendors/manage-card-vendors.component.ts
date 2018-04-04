import { CardVendorService } from './../../../Services/card-vendor.service';
import { Component, OnInit } from '@angular/core';
import { CardVendor } from '../../../Models/Domain/card-vendor.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BaseComponent } from '../../General/base/base.component';

@Component({
  selector: 'app-manage-card-vendors',
  templateUrl: './manage-card-vendors.component.html',
  styleUrls: ['./manage-card-vendors.component.css']
})
export class ManageCardVendorsComponent extends BaseComponent<CardVendor> implements OnInit {

  constructor(toaster: AppToasterServiceService, spinner: Ng4LoadingSpinnerService,
    service: CardVendorService) { super(spinner, service, toaster); }

  ngOnInit() {
    this.loadAll();
  }

}
