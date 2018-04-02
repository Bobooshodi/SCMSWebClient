import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToasterModule, ToasterService} from 'angular2-toaster';

import { AppToasterComponent } from './app-toaster.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
  ],
  exports: [AppToasterComponent],
  bootstrap: [AppToasterComponent],
  declarations: [AppToasterComponent],
  providers: [ToasterService]
})
export class AppToasterModule { }
