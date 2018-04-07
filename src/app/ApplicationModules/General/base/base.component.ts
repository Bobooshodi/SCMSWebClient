import { Component, OnInit, Input } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AbstractService } from '../../../Services/common/abstract.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { ModalService } from './../../../Shared/modal/modal.service';


export abstract class BaseComponent<T> {

  @Input() modalTitle: string;
  modalName: string;
  @Input() blocking = false;
  isOpen = false;
  warningModal;
  deleteObjectModal;
  objectDetailsModal;
  filter;
  mainList: T[];
  filteredList: T[];
  selectedObject: T;

  constructor(protected spinnerService: Ng4LoadingSpinnerService, protected service: AbstractService,
    protected toaster: AppToasterServiceService, protected modalService: ModalService) { }

  protected loadAll() {
    this.spinnerService.show();

    this.service.getAll().subscribe((cards: T[]) => {
      this.mainList = this.filteredList = cards;

      this.spinnerService.hide();
    },
    (err) => {
      this.spinnerService.hide();
      this.toaster.errorToast(err.message);

      console.log(JSON.stringify(err));
    }
  );
  }

  initAdd(add: boolean) {
    if (add) {
      this.modalName = 'Add';
      this.modalService.open(this.objectDetailsModal);
    } else {
      this.modalName = 'Remove';
    this.modalService.open(this.deleteObjectModal);
    }
  }

  abstract viewObject(object: T);

  closeModal() {
    this.modalService.close(this.deleteObjectModal);
    this.modalService.close(this.objectDetailsModal);
  }

}
