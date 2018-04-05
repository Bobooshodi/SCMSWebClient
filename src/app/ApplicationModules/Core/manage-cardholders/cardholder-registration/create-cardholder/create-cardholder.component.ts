import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Cardholder } from '../../../../../Models/Domain/cardholder.model';

import { CardholderService } from '../../../../../Services/cardholder.service';

@Component({
  selector: 'app-create-cardholder',
  templateUrl: './create-cardholder.component.html',
  styleUrls: ['./create-cardholder.component.css']
})
export class CreateCardholderComponent implements OnInit {

  loginForm: FormGroup;
  user = new Cardholder();

  constructor(private service: CardholderService, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

}
