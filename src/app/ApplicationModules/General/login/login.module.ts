import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { ToasterService } from 'angular2-toaster';
import { UserService } from '../../../Services/user.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [LoginComponent],
  providers: [
    UserService,
    ToasterService,
    Ng4LoadingSpinnerService
  ]
})
export class LoginModule { }
