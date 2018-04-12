import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { WarningModalComponent } from './warning-modal/warning-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalComponent,
    WarningModalComponent,
    DeleteModalComponent
  ],
  exports: [
    ModalComponent,
    DeleteModalComponent,
    WarningModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class AppModalModule {}
