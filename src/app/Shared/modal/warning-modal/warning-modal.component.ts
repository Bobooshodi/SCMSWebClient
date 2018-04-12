import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.css']
})
export class WarningModalComponent implements OnInit {

  @Input() modalHeader;
  @Input() modalMessage;
  @Output() response = new EventEmitter();
  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  processResponse(res: boolean) {
    this.response.emit(res);
  }

}
