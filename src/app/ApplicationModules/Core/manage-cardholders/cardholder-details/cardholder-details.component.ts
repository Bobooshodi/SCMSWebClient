import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Cardholder } from '../../../../Models/Domain/cardholder.model';
import { CardUserStatus } from '../../../../Models/Enums/card-user-status.enum';

import { ModalService } from '../../../../Shared/modal/modal.service';
import { VehicleService } from './../../../../Services/vehicle.service';
import { CardholderService } from '../../../../Services/cardholder.service';

@Component({
  selector: 'app-cardholder-details',
  templateUrl: './cardholder-details.component.html',
  styleUrls: ['./cardholder-details.component.css']
})
export class CardholderDetailsComponent implements OnInit {

  addVehiclesModal = 'addVehiclesModal';
  modalOperation: string;
  cardsFilter: string;
  parkingFilter: string;
  buildingsFilter: string;
  currentTab = 'other';
  modalHeader = '';
  deleteObjectModal = 'deleteModal';
  selectdCardholder = new Cardholder();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService,
    private vehicleService: VehicleService,
    private cardholderService: CardholderService
  ) {  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.route.params.subscribe(params => {
      this.selectdCardholder.status = CardUserStatus.INACTIVE;
      this.cardholderService.get<Cardholder>(params.id)
        .subscribe(cardholder => {
          this.selectdCardholder = cardholder;
        });
    });
  }

  switchTab(tab: string) {
    this.currentTab = tab;
  }

  showDeleteModal(operation: string) {
    switch (operation) {
      case 'card':
      this.modalHeader = 'Remove Card';
      break;
      case 'vehicle':
      this.modalHeader = 'Remove Vehicle';
      break;
      case 'supplimentary':
      this.modalHeader = 'Remove Supplementary Card';
      break;
      case 'cardholder':
      this.modalHeader = 'Deactivate Cardholder ';
      break;
    }

    this.modalService.open(this.deleteObjectModal);
  }

  openModal(operation: string) {
    switch (operation) {
      case 'vehicle':
      this.modalService.open(this.addVehiclesModal);
      break;
    }
  }

  closeModal() {
    this.modalService.close(this.deleteObjectModal);
    this.modalService.close(this.addVehiclesModal);
  }

  processFormData(data) {
    if (data) {

    } else {
      this.closeModal();
    }
  }

  processVehicleFormData(data) {
    if (data) {

    } else {
      this.closeModal();
    }
  }

}
