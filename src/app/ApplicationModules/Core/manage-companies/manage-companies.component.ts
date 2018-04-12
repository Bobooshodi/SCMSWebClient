import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseComponentModals } from '../../General/base/base-component-modals';

import { Company } from '../../../Models/Domain/company.model';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CompanyService } from '../../../Services/company.service';
import { ModalService } from '../../../Shared/modal/modal.service';
import { AbstractService } from '../../../Services/common/abstract.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BusinessUnit } from '../../../Models/Domain/business-unit.model';
import { BusinessUnitsService } from '../../../Services/business-units.service';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent extends BaseComponentModals<Company> implements OnInit {
  deleteWarningMessage = '';
  buListFilter = '';
  modalMessage = '';
  deleteObjectModal = 'deleteCompanyModal';
  objectDetailsModal = 'companyDetailsModal';
  allBusinessUnits: BusinessUnit[] = [];
  selectedBusinessUnits: BusinessUnit[] = [];

  constructor(
    spinnerService: Ng4LoadingSpinnerService,
    service: CompanyService,
    toaster: AppToasterServiceService,
    modalService: ModalService,
    fb: FormBuilder,
    private buService: BusinessUnitsService
  ) {
    super(spinnerService, service, toaster, modalService, fb);
  }

  ngOnInit() {
    this.createForm();
    this.loadAll();
  }

  loadAll() {
    try {
      this.spinnerService.show();
      this.buService.getAll<BusinessUnit>().subscribe(
        bu => {
          this.allBusinessUnits = bu;
          this.spinnerService.hide();
        },
        err => {
          this.handleError(err);
        }
      );
      super.loadAll();
    } catch (err) {
      this.handleError(err);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      code: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  viewObject(company: Company) {
    try {
      this.spinnerService.show();
      this.service.get<Company>(company.id).subscribe(resp => {
        this.selectedObject = resp;

        this.form.patchValue({
          name: resp.name,
          code: resp.code
        });

        if (resp.businessUnits) {
          resp.businessUnits.forEach(bu =>
            this.processBusinessUnitSelection(bu, true)
          );
        }

        this.spinnerService.hide();
        this.openModal('update');
      }, err => {
        this.handleError(err);
      });
    } catch (err) {
      this.handleError(err);
    }
  }

  deleteObject(company: Company) {
    this.selectedObject = company;
    this.deleteWarningMessage = `Are you sure you want to delete
    ${this.selectedObject.name} Company?`;

    this.openModal('remove');
  }

  processFormData(data) {
    try {
      this.spinnerService.show();
      if (this.modalOperation === 'create') {
        this.selectedObject = new Company();
      }

      this.selectedObject.name = data.name;
      this.selectedObject.code = data.code;
      this.selectedObject.businessUnits = this.selectedBusinessUnits;

      if (this.modalOperation === 'create') {
        this.service.create<Company>(this.selectedObject).subscribe(
          company => {
            this.selectedObject = company;
            this.toaster.successToast('Company created Successfully');

            this.clear();

            this.refresh();
          },
          err => {
            this.handleError(err);
          }
        );
      } else if (this.modalOperation === 'update') {
        this.service.update(this.selectedObject).subscribe(
          company => {
            this.toaster.successToast('Company updated Successfully');

            this.clear();

            this.refresh();
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

  processResponse(response: boolean) {
    try {
      if (response) {
        this.spinnerService.show();
        this.service.delete(this.selectedObject.id).subscribe(
          resp => {
            this.toaster.successToast('Company has been successfully deleted');

            this.refresh();
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

  processBusinessUnitSelection(bu: BusinessUnit, isSelected) {
    const refIndex = this.allBusinessUnits.findIndex(o => o.id === bu.id);

    if (isSelected && refIndex !== -1) {
      this.allBusinessUnits[refIndex].isSelected = true;
      this.selectedBusinessUnits.push(bu);
    } else {
      const index = this.selectedBusinessUnits.findIndex(o => o.id === bu.id);
      if (index !== -1) {
        this.selectedBusinessUnits.splice(index, 1);
      }
      if (refIndex !== -1) {
        this.allBusinessUnits[refIndex].isSelected = false;
      }
    }
  }

  clear() {
    this.selectedBusinessUnits = [];
  }
}
