import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { BusinessUnit } from '../../../Models/Domain/business-unit.model';

import { BaseComponentModals } from '../../General/base/base-component-modals';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from './../../../Shared/modal/modal.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BusinessUnitsService } from '../../../Services/business-units.service';
import { Building } from '../../../Models/Domain/building.model';
import { CardType } from '../../../Models/Domain/card-type.model';
import { BuildingService } from '../../../Services/building.service';
import { CardTypeService } from '../../../Services/card-type.service';

@Component({
  selector: 'app-manage-business-unit',
  templateUrl: './manage-business-unit.component.html',
  styleUrls: ['./manage-business-unit.component.css']
})
export class ManageBusinessUnitComponent extends BaseComponentModals<BusinessUnit> implements OnInit {

  buildingsFilter;
  cardTypesFilter;
  deleteWarningMessage = '';
  deleteObjectModal = 'deleteBusinessUnit';
  objectDetailsModal = 'businessUnitDetails';
  allBuildings: Building[] = [];
  selectedBuildings: Building[] = [];
  allCardtypes: CardType[] = [];
  selectedCardtypes: CardType[] = [];

  constructor(
    toaster: AppToasterServiceService,
    spinner: Ng4LoadingSpinnerService,
    service: BusinessUnitsService,
    modalService: ModalService,
    fb: FormBuilder,
    private buildingService: BuildingService,
    private cardTypeService: CardTypeService
  ) {
    super(spinner, service, toaster, modalService, fb);
  }

  ngOnInit() {
    this.createForm();
    this.loadAll();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  loadAll() {
    this.spinnerService.show();
    this.buildingService.getAll<Building>().subscribe(buildings => {
      this.allBuildings = buildings;
    },
    err => {
      this.handleError(err);
    }
  );

  this.cardTypeService.getAll<CardType>().subscribe(cardTypes => {
    this.allCardtypes = cardTypes;
  },
  err => {
    this.handleError(err);
  }
);

  super.loadAll();
  }

  viewObject(businessUnit: BusinessUnit): void {
    try {
      this.spinnerService.show();
      this.service.get(businessUnit.id).subscribe(
        (resp: BusinessUnit) => {
          if (resp) {
            this.selectedObject = resp;

            this.form.patchValue({
              name: this.selectedObject.name,
              description: this.selectedObject.description
            });
            this.spinnerService.hide();
            this.openModal('update');
          } else {
            throw new Error(
              'Unable to fetch this Business Unit details from the Server, Please try again'
            );
          }
        },
        err => {
          this.handleError(err);
        }
      );
    } catch (err) {
      this.handleError(err);
    }
  }

  deleteObject(businessUnit: BusinessUnit) {
    this.selectedObject = businessUnit;
    this.deleteWarningMessage = `Are you sure you sure you want to delete
    ${this.selectedObject.name} Business Unit? `;

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
        this.service.create<BusinessUnit>(this.selectedObject).subscribe(
          (resp: BusinessUnit) => {
            if (resp) {
              this.selectedObject = resp;
              this.toaster.successToast('Businss Unit Successfully Created');

              this.refresh();
            }
          },
          err => {
            this.handleError(err);
          }
        );
      } else if (this.modalOperation === 'update') {
        this.service.update(this.selectedObject).subscribe(
          (resp: BusinessUnit) => {
            if (resp) {
              this.selectedObject = resp;
              this.toaster.successToast('Businss Unit Successfully Updated');

              this.refresh();
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

  processCardtypeSelection(cardType: CardType, isSelected) {
    const refIndex = this.allCardtypes.findIndex(o => o.id === cardType.id);

    if (isSelected && refIndex !== -1) {
      this.allCardtypes[refIndex].isSelected = true;
      this.selectedCardtypes.push(cardType);
    } else {
      const index = this.selectedCardtypes.findIndex(o => o.id === cardType.id);
      if (index !== -1) {
        this.selectedCardtypes.splice(index, 1);
      }
      if (refIndex !== -1) {
        this.allCardtypes[refIndex].isSelected = false;
      }
    }
  }

  closeModal() {
    this.modalService.close(this.objectDetailsModal);
    this.modalService.close(this.deleteObjectModal);

    this.selectedBuildings = [];
    this.selectedCardtypes = [];
    this.allBuildings.forEach(c => c.isSelected = false);
    this.allCardtypes.forEach(c => c.isSelected = false);
  }

  processResponse(response: boolean) {
    try {
      if (response) {
        this.spinnerService.show();
        this.service.delete(this.selectedObject.id).subscribe(
          resp => {
            if (resp) {
              this.toaster.successToast('Business Unit removed successfully');

              this.refresh();
            } else {
              this.toaster.errorToast('Something went wrong');
            }
          },
          err => {
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
