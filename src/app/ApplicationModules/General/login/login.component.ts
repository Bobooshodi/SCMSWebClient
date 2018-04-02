import { BadErrorRequest } from './../../../Models/Application/bad-error-request.model';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ToasterService, Toast } from 'angular2-toaster';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { User } from './../../../Models/Domain/user.model';
import { UserService } from '../../../Services/user.service';
import { RandomDataGenerator } from '../../../Shared/random-data-generator';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User = new User();

  constructor(private userService: UserService, private router: Router,
    private fb: FormBuilder, private spinnerService: Ng4LoadingSpinnerService,
    private toaster: AppToasterServiceService) {
      this.createLoginForm();
    }

  ngOnInit() {

  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  openNextPage() {
    this.showSpinner();

    const user = new User();
    // tslint:disable-next-line:max-line-length
    user.access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImR1YmEiLCJzdWIiOiJkdWJhIiwicm9sZSI6WyJBY2Nlc3NDb250cm9sTWFuYWdlcl9GaW5kIiwiQWNjZXNzQ29udHJvbFN5c3RlbV9DcmVhdGUiLCJBY2Nlc3NDb250cm9sU3lzdGVtX0RlbGV0ZSIsIkFjY2Vzc0NvbnRyb2xTeXN0ZW1fRmluZCIsIkFjY2Vzc0NvbnRyb2xTeXN0ZW1fVXBkYXRlIiwiQWNjZXNzR3JvdXBfQ3JlYXRlIiwiQWNjZXNzR3JvdXBfRGVsZXRlIiwiQWNjZXNzR3JvdXBfRmluZCIsIkFjY2Vzc0dyb3VwX0ZpbmREZXRhaWwiLCJBY2Nlc3NHcm91cF9VcGRhdGUiLCJBcHBNb2R1bGVfRmluZCIsIkFwcFJlc291cmNlc19GaW5kIiwiQXBwUmVzb3VyY2VzX01hbmFnZURlc2t0b3AiLCJBcHBSZXNvdXJjZXNfTWFuYWdlUG9ydGFsIiwiQnVzaW5lc3NVbml0X0NyZWF0ZSIsIkJ1c2luZXNzVW5pdF9EZWxldGUiLCJCdXNpbmVzc1VuaXRfRmluZCIsIkJ1c2luZXNzVW5pdF9GaW5kRGV0YWlsIiwiQnVzaW5lc3NVbml0X1VwZGF0ZSIsIkNhcmRTZXR0aW5nX0NyZWF0ZSIsIkNhcmRTZXR0aW5nX0RlbGV0ZSIsIkNhcmRTZXR0aW5nX0ZpbmQiLCJDYXJkU2V0dGluZ19VcGRhdGUiLCJDYXJkU3RhdHVzSGlzdG9yeV9DcmVhdGUiLCJDYXJkU3RhdHVzSGlzdG9yeV9EZXRhY2giLCJDYXJkU3RhdHVzSGlzdG9yeV9GaW5kIiwiQ2FyZFR5cGVfQ3JlYXRlIiwiQ2FyZFR5cGVfRGVsZXRlIiwiQ2FyZFR5cGVfRmluZCIsIkNhcmRUeXBlX0ZpbmREZXRhaWwiLCJDYXJkVHlwZV9VcGRhdGUiLCJDYXJkX0NyZWF0ZSIsIkNhcmRfRGVsZXRlIiwiQ2FyZF9GaW5kIiwiQ2FyZF9GaW5kRGV0YWlsIiwiQ2FyZF9VcGRhdGUiLCJGYWNpbGl0eV9DcmVhdGUiLCJGYWNpbGl0eV9EZWxldGUiLCJGYWNpbGl0eV9GaW5kIiwiRmFjaWxpdHlfRmluZERldGFpbCIsIkZhY2lsaXR5X1VwZGF0ZSIsIkxldmVsX0NyZWF0ZSIsIkxldmVsX0RlbGV0ZSIsIkxldmVsX0ZpbmQiLCJMZXZlbF9VcGRhdGUiLCJNYWluRmFjaWxpdHlfQ3JlYXRlIiwiTWFpbkZhY2lsaXR5X0RlbGV0ZSIsIk1haW5GYWNpbGl0eV9GaW5kIiwiTWFpbkZhY2lsaXR5X0ZpbmREZXRhaWwiLCJNYWluRmFjaWxpdHlfVXBkYXRlIiwiUGVybWFuZW50VXNlckNhcmRTdGF0dXNIaXN0b3J5X0NyZWF0ZSIsIlBlcm1hbmVudFVzZXJDYXJkU3RhdHVzSGlzdG9yeV9GaW5kIiwiUGVybWFuZW50VXNlclN0YXR1c0hpc3RvcnlfQ3JlYXRlIiwiUGVybWFuZW50VXNlclN0YXR1c0hpc3RvcnlfRmluZCIsIlBlcm1hbmVudFVzZXJfQ3JlYXRlIiwiUGVybWFuZW50VXNlcl9EZWxldGUiLCJQZXJtYW5lbnRVc2VyX0ZpbmQiLCJQZXJtYW5lbnRVc2VyX0ZpbmREZXRhaWwiLCJQZXJtYW5lbnRVc2VyX1VwZGF0ZSIsIlJlcG9ydF9CbGFja2xpc3RlZFZpc2l0b3JzIiwiUmVwb3J0X0NhcmROb3RSZXR1cm5lZCIsIlJlcG9ydF9WaXNpdERldGFpbHMiLCJSZXBvcnRfVmlzaXRvclRyYW5zYWN0aW9ucyIsIlJvbGVfQ3JlYXRlIiwiUm9sZV9EZWxldGUiLCJSb2xlX0ZpbmQiLCJSb2xlX0ZpbmREZXRhaWwiLCJSb2xlX1VwZGF0ZSIsIlVzZXJfQWN0aXZhdGUiLCJVc2VyX0NyZWF0ZSIsIlVzZXJfRGVhY3RpdmF0ZSIsIlVzZXJfRmluZCIsIlVzZXJfRmluZERldGFpbCIsIlVzZXJfVXBkYXRlIiwiVmlzaXREZXRhaWxfQ2hlY2tJbiIsIlZpc2l0RGV0YWlsX0NoZWNrT3V0IiwiVmlzaXREZXRhaWxfRmluZCIsIlZpc2l0RGV0YWlsX0ZpbmREZXRhaWwiLCJWaXNpdG9yU3RhdHVzSGlzdG9yeV9DcmVhdGUiLCJWaXNpdG9yU3RhdHVzSGlzdG9yeV9GaW5kIiwiVmlzaXRvcl9DcmVhdGUiLCJWaXNpdG9yX0ZpbmQiLCJWaXNpdG9yX1VwZGF0ZSJdLCJpc3MiOiJodHRwOi8vMTkyLjE2OC4wLjMzOjEwMDAxIiwiYXVkIjoiNjcxYjBkZjQwODdmNDZmYWI4ZjgxZmE5ODJlYjRlZDgiLCJleHAiOjE1MTY2MzM5MTQsIm5iZiI6MTUxNjYwMzkxNH0.DkDb4y_MmtGlkgEP5wGUNFWsNXhCfGnbgzZKBl_EIb4';
    user.client_id = 'web';
    user.grant_type = 'password';
    user.username = 'Test User';

    localStorage.setItem('loggedInUser', JSON.stringify(user));
    this.router.navigate(['main']);
  }

  login() {
    this.spinnerService.show();

    try {
      const formData = this.loginForm.value;

      if (formData.username == null || formData.username.length < 1) {
        throw new Error('Username is not Present');
      }

      if (formData.password == null || formData.password.length < 1) {
        throw new Error('Password is not present');
      }

      this.userService.login(formData.username, formData.password)
      .subscribe( (user) => {
        if (user) {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          this.router.navigate(['main']);
        } else {
          throw new Error('Something went wrong, please try again');
        }
      },
      (err: HttpErrorResponse) => {
        this.spinnerService.hide();

        console.log(err);
        const temp: BadErrorRequest = JSON.parse(JSON.stringify(err.error));
        console.log(temp);
        console.log(temp.fullErrorMessage);

        this.toaster.errorToast(err.error.error_description);
        throw new Error('Server error: ' + JSON.stringify(err));
      }
    );
    } catch (e) {
      console.log(e);
      this.spinnerService.hide();
      this.toaster.errorToast(e.message);
    }
  }

  logout() {
    this.userService.logOut();
    this.router.navigate(['']);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async showSpinner() {
    this.spinnerService.show();

    await this.delay(15000);

    this.spinnerService.hide();
  }
}
