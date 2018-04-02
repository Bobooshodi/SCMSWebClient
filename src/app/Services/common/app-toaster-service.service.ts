import { Injectable } from '@angular/core';
import { Toast, ToasterService } from 'angular2-toaster';

@Injectable()
export class AppToasterServiceService {

  constructor(private toaster: ToasterService) { }

  errorToast(message: string, titleText?: string) {
    const toast: Toast = {
      type: 'error',
      title: 'Error' || titleText,
      body: message,
      showCloseButton: true
    };
    this.toaster.pop(toast);
  }

  successToast(message: string, titleText: string) {
    const toast: Toast = {
      type: 'success',
      title: 'Success' || titleText,
      body: message,
      showCloseButton: true
    };
    this.toaster.pop(toast);
  }

  warningToast(message: string, titleText: string) {
    const toast: Toast = {
      type: 'warning',
      title: 'Warning' || titleText,
      body: message,
      showCloseButton: true
    };
    this.toaster.pop(toast);
  }

  informationToast(message: string, titleText: string) {
    const toast: Toast = {
      type: 'info',
      title: 'Information' || titleText,
      body: message,
      showCloseButton: true
    };
    this.toaster.pop(toast);
  }

}
