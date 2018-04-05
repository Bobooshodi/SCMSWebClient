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
  modalAddId;
  modalRemoveId;
  filter;
  currentTypeTab;
  mainList: T[];
  filteredList: T[];

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

  initAdd() {
    this.modalName = 'Add';
    this.modalService.open(this.modalAddId);
  }

  initRemove() {
    this.modalName = 'Remove';
    this.modalService.open(this.modalRemoveId);
  }

  closeModal() {
    this.modalService.close(this.modalAddId);
  }

}
