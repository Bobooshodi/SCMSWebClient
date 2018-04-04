import { Component, OnInit } from '@angular/core';
import { SOACardRequest } from '../../../../Models/Domain/soa-card-request.model';
import { CardRequestsService } from '../../../../Services/card-requests.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';

@Component({
  selector: 'app-card-distribution-requests',
  templateUrl: './card-distribution-requests.component.html',
  styleUrls: ['./card-distribution-requests.component.css']
})
export class CardDistributionRequestsComponent implements OnInit {

  allRequests: SOACardRequest[];
  filteredRequests: SOACardRequest[];

  constructor(private service: CardRequestsService,
    private spinner: Ng4LoadingSpinnerService, private toaster: AppToasterServiceService) { }

  ngOnInit() {
    this.spinner.show();

    this.loadAll();

    this.spinner.hide();
  }

  loadAll() {
    this.service.getAll().subscribe((requests: SOACardRequest[]) => {
      this.allRequests = this.filteredRequests = requests;
    },
    (err) => {
      this.toaster.errorToast(err.message);
      console.log(JSON.stringify(err));
    }
  );
  }

}
