import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ModalComponent
    ],
    exports: [
        ModalComponent
    ],
    imports: [
      CommonModule
    ],
    providers: []
})

export class AppModalModule { }
