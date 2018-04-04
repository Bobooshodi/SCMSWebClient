import { Component, OnInit } from '@angular/core';
import { SOAPersonalizationRequest } from '../../../../Models/Domain/soa-personalization-request.model';
import { PersonalisationRequestsService } from '../../../../Services/personalisation-requests.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';

@Component({
  selector: 'app-personalization-requests',
  templateUrl: './personalization-requests.component.html',
  styleUrls: ['./personalization-requests.component.css']
})
export class PersonalizationRequestsComponent implements OnInit {

  allRequests: SOAPersonalizationRequest[];
  filteredRequests: SOAPersonalizationRequest[];

  constructor(private service: PersonalisationRequestsService,
    private spinner: Ng4LoadingSpinnerService, private toaster: AppToasterServiceService) { }

  ngOnInit() {
    this.spinner.show();

    this.loadAll();

    this.spinner.hide();
  }

  loadAll() {
    this.service.getAll().subscribe((requests: SOAPersonalizationRequest[]) => {
      this.allRequests = this.filteredRequests = requests;
    },
    (err) => {
      this.toaster.errorToast(err.message);
      console.log(JSON.stringify(err));
    }
  );
  }

}
