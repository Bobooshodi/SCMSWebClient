import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AbstractService } from '../../../Services/common/abstract.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { ModalService } from './../../../Shared/modal/modal.service';


export abstract class BaseComponent<T> {

  filter;
  mainList: T[];
  filteredList: T[];

  constructor(protected spinnerService: Ng4LoadingSpinnerService, protected service: AbstractService,
    protected toaster: AppToasterServiceService) { }

  protected loadAll() {
    try {
      this.spinnerService.show();

    this.service.getAll().subscribe((cards: T[]) => {
      this.mainList = this.filteredList = cards;

      this.spinnerService.hide();
    },
    (err) => {
      this.handleError(err);
    }
  );
    } catch (err) {
      this.handleError(err);
    }
  }

  refresh() {
    this.spinnerService.hide();
    this.loadAll();
  }

  protected handleError(err) {
    this.spinnerService.hide();
    this.toaster.errorToast(err.message || err.error.message);
    console.log(err);
  }

  clear() { }
}
