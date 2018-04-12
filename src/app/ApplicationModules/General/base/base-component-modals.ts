import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BaseComponent } from './base.component';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AbstractService } from '../../../Services/common/abstract.service';
import { ModalService } from '../../../Shared/modal/modal.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';

export abstract class BaseComponentModals<T> extends BaseComponent<T> {

  @Input() modalTitle: string;
  modalOperation: string;
  @Input() blocking = false;
  isOpen = false;
  abstract deleteObjectModal;
  abstract objectDetailsModal;
  selectedObject: T;
  form: FormGroup;

  constructor(protected spinnerService: Ng4LoadingSpinnerService, protected service: AbstractService,
    protected toaster: AppToasterServiceService, protected modalService: ModalService,
    protected fb: FormBuilder) { super(spinnerService, service, toaster); }

  openModal(mode: string) {
      if (mode === 'create') {
        this.form.reset();
        this.modalOperation = 'create';
        this.modalService.open(this.objectDetailsModal);
      } else if (mode === 'update') {
        this.modalOperation = 'update';
        this.modalService.open(this.objectDetailsModal);
      } else {
        this.modalOperation = 'remove';
        this.modalService.open(this.deleteObjectModal);
      }
    }

  closeModal() {
    this.modalService.close(this.deleteObjectModal);
    this.modalService.close(this.objectDetailsModal);
  }

  refresh() {
    this.closeModal();
    super.refresh();
  }

  protected handleError(err) {
    this.closeModal();

    super.handleError(err);
  }

  abstract createForm();

  abstract viewObject(object: T);
}
