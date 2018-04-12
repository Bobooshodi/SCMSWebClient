import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { CardTypeService } from './../../../Services/card-type.service';
import { CardType } from '../../../Models/Domain/card-type.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { BaseComponentModals } from '../../General/base/base-component-modals';
import { ModalService } from '../../../Shared/modal/modal.service';

@Component({
  selector: 'app-manage-card-type',
  templateUrl: './manage-card-type.component.html',
  styleUrls: ['./manage-card-type.component.css']
})
export class ManageCardTypeComponent extends BaseComponentModals<CardType> implements OnInit {
  objectDetailsModal = 'cardTypeDetails';
  deleteObjectModal = 'deleteCardtype';

  constructor(
    service: CardTypeService,
    spinner: Ng4LoadingSpinnerService,
    toaster: AppToasterServiceService,
    modalService: ModalService,
    fb: FormBuilder
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

  viewObject(cardType: CardType) {
    try {
      this.service.get(cardType.id).subscribe(
        (type: CardType) => {
          if (type) {
            this.selectedObject = type;

            this.form.patchValue({
              name: this.selectedObject.name,
              description: this.selectedObject.description
            });
          } else {
            throw new Error('Unable to fetch CardType from the Server');
          }
        },
        err => {
          this.handleError(err);
        }
      );

      this.openModal('update');
    } catch (err) {
      this.handleError(err);
    }
  }

  deleteObject(cardType: CardType) {
    this.selectedObject = cardType;

    this.openModal('remove');
  }

  processFormData(data) {
    try {
      if (this.modalOperation === 'create') {
        this.selectedObject = new CardType();
      }
        this.selectedObject.description = data.description;
        this.selectedObject.name = data.name;

        if (this.modalOperation === 'create') {
        this.service.create<CardType>(this.selectedObject).subscribe(
          (cardType: CardType) => {
            if (cardType) {
              this.selectedObject = cardType;
            }
            this.toaster.successToast('CardType created Successfully');

            this.refresh();
          },
          err => {
            this.handleError(err);
          }
        );
      } else if (this.modalOperation === 'update') {
        this.service.update(this.selectedObject).subscribe(
          (type: CardType) => {
            if (type) {
              this.selectedObject = type;
            }
            this.toaster.successToast('CardType updated Successfully');

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
    if (response) {
      this.spinnerService.show();
      this.service.delete(this.selectedObject.id).subscribe(resp => {
        if (resp) {
          this.toaster.successToast('Cardtype removed Successfully');

          this.refresh();
        } else {
          throw new Error('Something went Wrong');
        }
      }, err => {
        this.handleError(err);
      }
    );
    } else {
      this.closeModal();
    }
  }
}
