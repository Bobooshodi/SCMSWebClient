import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponentModals } from '../../General/base/base-component-modals';
import { SHCTenant } from '../../../Models/Domain/shc-tenant.model';
import { AbstractService } from '../../../Services/common/abstract.service';
import { ShcTenantsService } from '../../../Services/shc-tenants.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { ModalService } from '../../../Shared/modal/modal.service';
import { BuildingService } from '../../../Services/building.service';
import { Building } from '../../../Models/Domain/building.model';

@Component({
  selector: 'app-manage-shc-tenants',
  templateUrl: './manage-shc-tenants.component.html',
  styleUrls: ['./manage-shc-tenants.component.css']
})
export class ManageShcTenantsComponent extends BaseComponentModals<SHCTenant>
  implements OnInit {
  deleteWarningMessage = '';
  deleteObjectModal = 'deleteTenantModal';
  objectDetailsModal = 'tenantDetailsModal';
  allBuildings: Building[] = [];

  constructor(
    spinnerService: Ng4LoadingSpinnerService,
    service: ShcTenantsService,
    toaster: AppToasterServiceService,
    modalService: ModalService,
    fb: FormBuilder,
    private buildingService: BuildingService
  ) {
    super(spinnerService, service, toaster, modalService, fb);
  }

  ngOnInit() {
    this.createForm();
    this.loadAll();
  }

  loadAll() {
    this.spinnerService.show();
    this.buildingService.getAll<Building>().subscribe(
      buildings => {
        this.allBuildings = buildings;
        this.spinnerService.hide();
      },
      err => {
        this.handleError(err);
      }
    );
    super.loadAll();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      contactPerson: ['', [Validators.required, Validators.minLength(1)]],
      phoneNo: ['', [Validators.required, Validators.minLength(1)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(1)]
      ],
      address: ['', [Validators.required, Validators.minLength(1)]],
      building: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  viewObject(tenant: SHCTenant) {
    try {
      this.spinnerService.show();
      this.service.get<SHCTenant>(tenant.id).subscribe(
        resp => {
          this.selectedObject = resp;

          this.form.patchValue({
            name: resp.name,
            contactPerson: resp.contactPerson,
            email: resp.email,
            phoneNo: resp.phone,
            address: resp.address,
            building: resp.buildingId
          });

          this.spinnerService.hide();
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

  deleteObject(tenant: SHCTenant) {
    this.selectedObject = tenant;
    this.deleteWarningMessage = `Are you sure you want to delete
    ${this.selectedObject.name} Tenant?`;

    this.openModal('remove');
  }

  processFromData(data) {
    try {
      this.spinnerService.show();
      if (this.modalOperation === 'create') {
        this.selectedObject = new SHCTenant();
      }
      const index = this.allBuildings.findIndex(o => o.id === data.building);

      this.selectedObject.name = data.name;
      this.selectedObject.address = data.address;
      this.selectedObject.contactPerson = data.contactPerson;
      this.selectedObject.phone = data.phoneNo;
      this.selectedObject.email = data.email;
      this.selectedObject.building = this.allBuildings[index].name;
      this.selectedObject.buildingId = this.allBuildings[index].id;

      if (this.modalOperation === 'create') {
        this.service.create<SHCTenant>(this.selectedObject).subscribe(
          tenant => {
            this.selectedObject = tenant;
            this.toaster.successToast('Tenant has been successfully created');

            this.refresh();
          },
          err => {
            this.handleError(err);
          }
        );
      } else if (this.modalOperation === 'update') {
        this.service.update(this.selectedObject).subscribe(
          resp => {
            this.toaster.successToast('Tenant has been successfully updated');

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
            this.toaster.successToast('Tenant has been successfully deleted');

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
}
