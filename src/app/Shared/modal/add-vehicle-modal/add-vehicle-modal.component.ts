import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vehicle-modal',
  templateUrl: './add-vehicle-modal.component.html',
  styleUrls: ['./add-vehicle-modal.component.css']
})
export class AddVehicleModalComponent implements OnInit {

  @Output() formData = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      plate: ['', [Validators.required, Validators.minLength(1)]],
      model: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  processFormData(data) {
    this.formData.emit(data);
  }

  closeModal() {
    this.formData.emit(null);
  }

}
