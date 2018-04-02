import { isNull, isNullOrUndefined } from 'util';

export class BadErrorRequest {
  message: string;
  messageDetail: string;
  modelState: ModelState;
  error: string;
  error_description: string;

  get fullErrorMessage(): string {
    let errorMsg: string;

    if (!isNull(this.error_description) && this.error_description.length > 0) {
      if (this.error_description.includes('The request is invalid.')) {
        errorMsg += this.error_description;
      }
    }

    if (!isNullOrUndefined(this.message)) {
      if (!this.message.includes('The request is invalid.')) {
        errorMsg += this.message;
      }
    }

    if (!isNullOrUndefined(this.messageDetail)) {
      if (!this.messageDetail.includes('The request is invalid.')) {
        errorMsg += this.messageDetail;
      }
    }

    if (
      !isNullOrUndefined(this.modelState) &&
      !isNullOrUndefined(this.modelState.errorMessage) &&
      this.modelState.errorMessage.length > 0
    ) {
      this.modelState.errorMessage.forEach(err => {
        if (!err.includes('The request is invalid.')) {
          errorMsg += err;
        }
      });
    }
    return errorMsg;
  }
}

export class ModelState {
  errorMessage: string[];
}
