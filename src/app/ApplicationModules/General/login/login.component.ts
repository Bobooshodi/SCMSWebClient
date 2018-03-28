import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ToasterService, Toast } from 'angular2-toaster';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { User } from './../../../Models/Domain/user.model';
import { UserService } from '../../../Services/user.service';
import { RandomDataGenerator } from '../../../Shared/random-data-generator';

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
    private toaster: ToasterService) {
      this.createLoginForm();
    }

  ngOnInit() {
    // this.showSpinner();
    const toast: Toast = {
      type: 'error',
      title: 'Title text',
      body: 'Body text',
      showCloseButton: true
  };

    this.toaster.pop(toast);
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  login(isValid: boolean) {
    try {
      if (!isValid) {
        throw new Error('Form Data is not Valid');
      }

      const formData = this.loginForm.value;

      if (formData.username == null) {
        throw new Error('Username is not Present');
      }

      if (formData.password == null) {
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
      (err) => {
        console.log('Server error: ' + JSON.stringify(err));
      }
    );
    } catch (e) {
      console.log(e);
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
