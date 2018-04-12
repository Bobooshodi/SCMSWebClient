import { Component, OnInit } from '@angular/core';

import { BaseComponentModals } from '../../General/base/base-component-modals';
import { AccessGroup } from '../../../Models/Domain/access-group.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { BuildingService } from '../../../Services/building.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { ModalService } from '../../../Shared/modal/modal.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AccessUnitService } from '../../../Services/access-unit.service';
import { Building } from '../../../Models/Domain/building.model';

@Component({
  selector: 'app-manage-access-unit',
  templateUrl: './manage-access-unit.component.html',
  styleUrls: ['./manage-access-unit.component.css']
})
export class ManageAccessUnitComponent extends BaseComponentModals<AccessGroup> implements OnInit {
  deleteWarningMessage = '';
  objectDetailsModal = 'accessUnitDetails';
  deleteObjectModal = 'deleteAccessUnit';
  accessGroupFilter;
  buildingsFilter = '';
  allAccessGroups = [];
  selectedAccessGroups = [];
  allBuildings: Building[] = [];
  selectedBuildings: Building[] = [];

  constructor(
    spinnerService: Ng4LoadingSpinnerService,
    service: AccessUnitService,
    toaster: AppToasterServiceService,
    modalService: ModalService,
    fb: FormBuilder,
    private buldingService: BuildingService
  ) {
    super(spinnerService, service, toaster, modalService, fb);
  }

  ngOnInit() {
    this.createForm();
    this.loadAll();
  }

  loadAll() {
    this.spinnerService.show();
    this.buldingService.getAll().subscribe(
      (buildings: Building[]) => {
        this.allBuildings = buildings;
      },
      err => {
        this.handleError(err);
      }
    );
    super.loadAll();
  }

  createForm() {
    this.form = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      nameInAccessControl: [Validators.required],
      buildings: [Validators.required],
      accessControl: [Validators.required]
    });
  }

  viewObject(accessGroup: AccessGroup) {
    try {
      this.spinnerService.show();
      this.service.get<AccessGroup>(accessGroup.id).subscribe(
        resp => {
          this.selectedObject = resp;

          this.form.patchValue({
            displayName: resp.displayName,
            accessControl: resp.accessControl,
            description: resp.description
          });

          resp.buildings.forEach(building => {
            this.processBuildingSelection(building, true);
          });

          this.openModal('update');
        },
        err => {
          this.handleError(err);
        }
      );
    } catch (err) {
      this.handleError(err);
    }
  }

  deleteObject(accessGroup: AccessGroup) {
    this.selectedObject = accessGroup;
    this.deleteWarningMessage = `Are you sure you want to remove
    ${this.selectedObject.displayName} Access Group?`;

    this.openModal('remove');
  }

  processFormData(data) {
    try {
      this.spinnerService.show();
      if (this.modalOperation === 'create') {
        this.selectedObject = new AccessGroup();
      }

      this.selectedObject.buildings = this.selectedBuildings;
      this.selectedObject.displayName = data.displayName;
      this.selectedObject.description = data.description;

      if (this.modalOperation === 'create') {
        this.service.create<AccessGroup>(this.selectedObject).subscribe(
          (accessGroup: AccessGroup) => {
            this.selectedObject = accessGroup;
            this.toaster.successToast('Access Group successfully created');

            this.refresh();
          },
          err => {
            this.handleError(err);
          }
        );
      } else if (this.modalOperation === 'update') {
        this.service.update(this.selectedObject).subscribe(
          resp => {
            if (resp) {
              this.toaster.successToast('Access Group successfully');

              this.refresh();
            } else {
              throw new Error(
                'Unable to Create Access Group, Please try again later'
              );
            }
          },
          err => {
            this.handleError(err);
          }
        );
      }
    } catch (err) {
      this.handleError(err);
    }
  }

  processBuildingSelection(building: Building, isSelected) {
    const refIndex = this.allBuildings.findIndex(o => o.id === building.id);

    if (isSelected && refIndex !== -1) {
      this.allBuildings[refIndex].isSelected = true;
      this.selectedBuildings.push(building);
    } else {
      const index = this.selectedBuildings.findIndex(o => o.id === building.id);
      if (index !== -1) {
        this.selectedBuildings.splice(index, 1);
      }
      if (refIndex !== -1) {
        this.allBuildings[refIndex].isSelected = false;
      }
    }
  }

  processResponse(remove: boolean) {
    if (remove) {
      this.spinnerService.show();
      this.service.delete(this.selectedObject.id).subscribe(
        resp => {
          if (resp) {
            this.toaster.successToast('Access group deleted Successfully');

            this.refresh();
          }
        },
        err => {
          this.handleError(err);
        }
      );
    } else {
      this.closeModal();
    }
  }

  clear() {
    this.selectedBuildings = [];
    this.selectedAccessGroups = [];
  }
}
