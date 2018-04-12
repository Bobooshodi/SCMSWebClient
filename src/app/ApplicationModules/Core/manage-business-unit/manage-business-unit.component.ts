import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { BusinessUnit } from '../../../Models/Domain/business-unit.model';

import { BaseComponentModals } from '../../General/base/base-component-modals';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from './../../../Shared/modal/modal.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BusinessUnitsService } from '../../../Services/business-units.service';

@Component({
  selector: 'app-manage-business-unit',
  templateUrl: './manage-business-unit.component.html',
  styleUrls: ['./manage-business-unit.component.css']
})
export class ManageBusinessUnitComponent extends BaseComponentModals<BusinessUnit> implements OnInit {

  deleteObjectModal = 'deleteBusinessUnit';
  objectDetailsModal = 'businessUnitDetails';

  constructor(toaster: AppToasterServiceService, spinner: Ng4LoadingSpinnerService,
    service: BusinessUnitsService, modalService: ModalService, fb: FormBuilder) {
    super(spinner, service, toaster, modalService, fb);
  }

  ngOnInit() {
    this.createForm();
    this.loadAll();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      code: ['', [Validators.required, Validators.minLength(1)]],
      status: [Validators.required]
    });
  }

  viewObject(businessUnit: BusinessUnit): void {
    try {
      this.service.get(businessUnit.id).subscribe((resp: BusinessUnit) => {
        if (resp) {
          this.selectedObject = resp;

          this.form.patchValue({
            name: this.selectedObject.name,
            code: this.selectedObject.description
          });
          this.openModal('update');
        } else {
          throw new Error('Unable to fetch this Business Unit details from the Server, Please try again');
        }
      }, err => {
        this.handleError(err);
      }
    );
    } catch (err) {
      this.handleError(err);
    }
  }

  deleteObject(businessUnit: BusinessUnit) {
    this.selectedObject = businessUnit;

    this.openModal('remove');
  }

  processFormData(data) {
    try {
      this.spinnerService.show();

      if (this.modalOperation === 'create') {
        this.selectedObject = new BusinessUnit();
      }

      this.selectedObject.name = data.name;
      this.selectedObject.description = data.code;

      if (this.modalOperation === 'create') {
        this.service.create<BusinessUnit>(this.selectedObject).subscribe((resp: BusinessUnit) => {
          if (resp) {
            this.selectedObject = resp;
            this.toaster.successToast('Businss Unit Successfully Created');

            this.refresh();
          }
        }, err => {
          this.handleError(err);
        }
      );
      } else if (this.modalOperation === 'update') {
        this.service.update(this.selectedObject).subscribe((resp: BusinessUnit) => {
          if (resp) {
            this.selectedObject = resp;
            this.toaster.successToast('Businss Unit Successfully Updated');

            this.refresh();
          }
        }, err => {
          this.handleError(err);
        }
      );
      }
      } catch (err) {
        this.handleError(err);
      }
  }

  processResponse(response: boolean) {
    try {
      if (response) {
        this.spinnerService.show();
        this.service.delete(this.selectedObject.id).subscribe(resp => {
          if (resp) {
            this.toaster.successToast('Business Unit removed successfully');

            this.refresh();
          } else {
            this.toaster.errorToast('Something went wrong');
          }
        }, err => {
          this.handleError(err);
        }
      );
      } else {
        this.closeModal();
      }
    } catch (err) {
      this.handleError(err);
    }
  }
}
