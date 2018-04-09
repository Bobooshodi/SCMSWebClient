import { FormBuilder } from '@angular/forms';

import { BaseComponentModals } from './base-component-modals';

import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AbstractService } from '../../../Services/common/abstract.service';
import { ModalService } from '../../../Shared/modal/modal.service';

export abstract class BaseComponentTabsAndModal<T> extends BaseComponentModals<T> {

  constructor(protected spinnerService: Ng4LoadingSpinnerService, protected service: AbstractService,
    protected toaster: AppToasterServiceService, protected modalService: ModalService,
    protected fb: FormBuilder) { super(spinnerService, service, toaster, modalService, fb); }

  abstract createForm();

  abstract viewObject(object: T);

}
