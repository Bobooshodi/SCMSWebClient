import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ManageCardsComponent } from '../manage-cards/manage-cards.component';

import { CardService } from '../../../Services/card.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { ModalService } from '../../../Shared/modal/modal.service';
import { CardType } from '../../../Models/Domain/card-type.model';
import { CardTypeService } from '../../../Services/card-type.service';

@Component({
  selector: 'app-card-inventory',
  templateUrl: './card-inventory.component.html',
  styleUrls: ['./card-inventory.component.css']
})
export class CardInventoryComponent extends ManageCardsComponent implements OnInit {

  allCardTypes: CardType[] = [];

  constructor(spinnerService: Ng4LoadingSpinnerService, cardService: CardService, fb: FormBuilder,
    toaster: AppToasterServiceService, modalService: ModalService, private cardTypeService: CardTypeService) {
    super(spinnerService, cardService, fb, toaster, modalService);
  }

  ngOnInit() {
    this.createForm();
    this.loadAll();
  }

  createForm() {
    this.form = this.fb.group({
      type: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  loadAll() {
    try {
      this.cardTypeService.getAll().subscribe((cardTypes: CardType[]) => {
        this.allCardTypes = cardTypes;

        this.spinnerService.hide();
      }, err => {
        this.toaster.errorToast(err.message);
        console.log(err);
      }
    );

      super.loadAll();
    } catch (err) {
      this.toaster.errorToast(err.message);

      console.log(err);
    }
  }

  viewObject(card) {

  }

  processFormData(data) {

  }

}
