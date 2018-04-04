import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AbstractService } from '../../../Services/common/abstract.service';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';


export abstract class BaseComponent<T> {

  filter;
  currentTypeTab;
  mainList: T[];
  filteredList: T[];

  constructor(protected spinnerService: Ng4LoadingSpinnerService, protected service: AbstractService,
    protected toaster: AppToasterServiceService) { }

  protected loadAll() {
    this.spinnerService.show();

    this.service.getAll().subscribe((cards: T[]) => {
      this.mainList = this.filteredList = cards;

      this.spinnerService.hide();
    },
    (err) => {
      this.spinnerService.hide();
      this.toaster.errorToast(err.message.message_description);

      console.log(JSON.stringify(err));
    }
  );
  }

}
