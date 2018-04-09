import { FormBuilder } from '@angular/forms';
import { CardVendorService } from './../../../Services/card-vendor.service';
import { Component, OnInit } from '@angular/core';
import { CardVendor } from '../../../Models/Domain/card-vendor.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BaseComponentModals } from '../../General/base/base-component-modals';
import { ModalService } from './../../../Shared/modal/modal.service';

@Component({
  selector: 'app-manage-card-vendors',
  templateUrl: './manage-card-vendors.component.html',
  styleUrls: ['./manage-card-vendors.component.css']
})
export class ManageCardVendorsComponent extends BaseComponentModals<CardVendor> implements OnInit {

  deleteObjectModal = 'removeCardVendor';
  objectDetailsModal = 'cardVendorDetails';

  constructor(toaster: AppToasterServiceService, spinner: Ng4LoadingSpinnerService,
    service: CardVendorService, modalService: ModalService, fb: FormBuilder) {
      super(spinner, service, toaster, modalService, fb);
    }

  ngOnInit() {
    this.loadAll();
  }

  createForm() {
    throw new Error('Method not implemented.');
  }

  viewObject(vendor: CardVendor): void {
    this.openModal('update');
  }

  updateVendor(create: boolean, data) {}

}
