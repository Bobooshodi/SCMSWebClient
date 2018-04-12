import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { BuildingService } from './../../../Services/building.service';
import { Component, OnInit, Input } from '@angular/core';
import { Building } from '../../../Models/Domain/building.model';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BaseComponentModals } from '../../General/base/base-component-modals';
import { ModalService } from './../../../Shared/modal/modal.service';

@Component({
  selector: 'app-manage-building',
  templateUrl: './manage-building.component.html',
  styleUrls: ['./manage-building.component.css']
})
export class ManageBuildingComponent extends BaseComponentModals<Building> implements OnInit {

  objectDetailsModal = 'buildingDetails';
  deleteObjectModal = 'deleteBuilding';

  constructor(spinnerService: Ng4LoadingSpinnerService, buildingService: BuildingService,
    toaster: AppToasterServiceService, modalService: ModalService, fb: FormBuilder) {
      super(spinnerService, buildingService, toaster, modalService, fb);
    }

  ngOnInit() {
    this.createForm();
    this.loadAll();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      code: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  viewObject(building: Building): void {
    this.selectedObject = building;

    this.openModal('update');
  }

  processFormData(data) {
    try {
      this.spinnerService.show();

      if (this.modalOperation === 'create') {
        this.selectedObject = new Building();
      }

      this.selectedObject.name = data.name;
      this.selectedObject.address = data.code;

      if (this.modalOperation === 'create') {
      this.service.create<Building>(this.selectedObject).subscribe((bu) => {
        if (bu) {
          this.selectedObject = bu;
          this.toaster.successToast('Building created successfully');

          this.refresh();
        }
      }, err => {
        this.handleError(err);
      }
    );
  } else if (this.modalOperation === 'update') {
    this.service.update(this.selectedObject).subscribe((bu) => {
      if (bu) {
        this.toaster.successToast('Building created successfully');

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

  deleteObject(building: Building) {
    this.selectedObject = building;

    this.openModal('remove');
  }

  processResponse(response: boolean) {
    try {
      if (response) {
        this.service.delete(this.selectedObject.id).subscribe(resp => {
          if (resp) {
            this.spinnerService.hide();
            this.toaster.successToast('Building has been deleted successfully');

            this.refresh();
          } else {
            throw new Error('Something went wrong, please try again');
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
