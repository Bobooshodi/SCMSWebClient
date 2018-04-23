import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { WarningModalComponent } from './warning-modal/warning-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVehicleModalComponent } from './add-vehicle-modal/add-vehicle-modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    WarningModalComponent,
    DeleteModalComponent,
    AddVehicleModalComponent
  ],
  exports: [
    ModalComponent,
    DeleteModalComponent,
    WarningModalComponent,
    AddVehicleModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class AppModalModule {}
