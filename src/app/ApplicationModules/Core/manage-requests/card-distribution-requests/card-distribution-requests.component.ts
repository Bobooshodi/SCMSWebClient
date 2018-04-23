import { FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SOACardRequest } from '../../../../Models/Domain/soa-card-request.model';

import { BaseComponentModals } from '../../../General/base/base-component-modals';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ModalService } from '../../../../Shared/modal/modal.service';
import { DataSendingService } from '../../../../Services/application/data-sending.service';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';
import { CardRequestsService } from '../../../../Services/card-requests.service';
import { CardType } from '../../../../Models/Domain/card-type.model';
import { BuildingService } from '../../../../Services/building.service';
import { Card } from '../../../../Models/Domain/card.model';
import { CardService } from '../../../../Services/card.service';

@Component({
  selector: 'app-card-distribution-requests',
  templateUrl: './card-distribution-requests.component.html',
  styleUrls: ['./card-distribution-requests.component.css']
})
export class CardDistributionRequestsComponent extends BaseComponentModals<SOACardRequest> implements OnInit, OnDestroy {

  deleteObjectModal = 'deleteCardDistributionRequest';
  objectDetailsModal = 'cardDistributionRequestDetails';
  selectedCards: Card[] = [];
  cards: Card[] = [];
  listFilter: any;
  startNumber: number;
  endNumber: number;
  showAvailableNumbers: boolean;
  subscription: Subscription;

  constructor(service: CardRequestsService, modalService: ModalService, fb: FormBuilder,
    spinner: Ng4LoadingSpinnerService, toaster: AppToasterServiceService,
    protected dataService: DataSendingService, private cardService: CardService) {
      super(spinner, service, toaster, modalService, fb);
      this.subscription = this.dataService.getObject1Data.subscribe(x => { this.listFilter = x; });
     }

  ngOnInit() {
    this.selectedObject = new SOACardRequest();
    this.selectedObject.cardType = new CardType();
    this.showAvailableNumbers = false;
    this.createForm();
    this.loadAll();
  }

  createForm() {
    this.form = this.fb.group({

    });
  }

  viewObject(request: SOACardRequest) {

  }

  process(request: SOACardRequest) {
    this.selectedObject = request;

    this.openModal('create');
  }

  goBack() {
    this.showAvailableNumbers = false;
  }

  fetchNumbers() {
    this.showAvailableNumbers = true;

    this.spinnerService.show();

    this.cardService.getAll<Card>().subscribe(resp => {
      this.cards = resp;

      this.spinnerService.hide();
    },
    err => {
      this.handleError(err);
    }
  );
  }

  processBuildingSelection(building: Card, isChecked: boolean) {
    if (isChecked) {
      this.selectedCards.push(building);
    } else {
      const index = this.selectedCards.indexOf(building);
      if (index !== -1) {
        this.selectedCards.splice(index, 1);
      }
    }
  }

  closeModal() {
    this.showAvailableNumbers = false;

    super.closeModal();
  }

  ngOnDestroy(): void {
    this.dataService.clearData();
    this.subscription.unsubscribe();
  }

}
