import { FormBuilder, Validators } from '@angular/forms';
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
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      contactNo: ['', [Validators.required, Validators.minLength(0)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
      address: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  viewObject(vendor: CardVendor): void {
    try {
      this.service.get<CardVendor>(vendor.id).subscribe(resp => {
        if (resp) {
          this.selectedObject = resp;

        this.form.patchValue({
          name: resp.name,
          address: resp.address,
          description: resp.description,
          contactNo: resp.phone
        });

        this.openModal('update');
        } else {
          throw new Error('Unable to get Card Vendor details from the server, please try again');
        }
      }, err => {
        this.handleError(err);
      }
    );
    } catch (err) {
      this.handleError(err);
    }
  }

  deleteObject(vendor: CardVendor) {
    this.selectedObject = vendor;
    this.openModal('remove');
  }

  processResponseData(data) {
    if (data) {

    } else {
      this.closeModal();
    }
  }

  processFormData(data) {
    if (this.modalOperation === 'create') {
      this.selectedObject = new CardVendor();
    }

    this.selectedObject.name = data.name;
    this.selectedObject.phone = data.contactNo;
    this.selectedObject.description = data.description;
    this.selectedObject.address = data.address;

    if (this.modalOperation === 'create') {
      this.service.create<CardVendor>(this.selectedObject).subscribe(vendor => {
        this.selectedObject = vendor;
        this.toaster.successToast('Vendor created successfully');

        this.refresh();
      }, err => {
        this.handleError(err);
      }
    );
    } else if (this.modalOperation === 'update') {
      this.service.update(this.selectedObject).subscribe(resp => {
        this.toaster.successToast('Vendor updated successfully');

        this.refresh();
      }, err => {
        this.handleError(err);
      }
    );
    }
  }
}
