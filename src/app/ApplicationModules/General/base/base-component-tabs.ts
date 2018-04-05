import { BaseComponent } from './base.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../Services/common/app-toaster-service.service';
import { AbstractService } from '../../../Services/common/abstract.service';
import { ModalService } from './../../../Shared/modal/modal.service';

export abstract class BaseComponentTabs<T> extends BaseComponent<T> {

  currentTypeTab = 'all';

  constructor(protected spinnerService: Ng4LoadingSpinnerService, protected service: AbstractService,
    protected toaster: AppToasterServiceService, protected modalService: ModalService) {
      super(spinnerService, service, toaster, modalService);
    }

  protected abstract filterList(param);
}
