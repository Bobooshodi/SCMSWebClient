import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() modalHeader;
  @Output() formData = new EventEmitter();
  form: FormGroup;

  constructor(protected fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      reason: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  processFormData(data) {
    this.formData.emit(data);
  }

  closeModal() {
    this.formData.emit(null);
  }

}
