import { Component, OnInit } from '@angular/core';
import { SOAReplaceCardRequest } from '../../../../Models/Domain/soa-replace-card-request.model';
import { CardReplacementRequestsService } from '../../../../Services/card-replacement-requests.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterServiceService } from '../../../../Services/common/app-toaster-service.service';

@Component({
  selector: 'app-replace-card-requests',
  templateUrl: './replace-card-requests.component.html',
  styleUrls: ['./replace-card-requests.component.css']
})
export class ReplaceCardRequestsComponent implements OnInit {

  allRequests: SOAReplaceCardRequest[];
  filteredRequests: SOAReplaceCardRequest[];

  constructor(private service: CardReplacementRequestsService,
    private spinner: Ng4LoadingSpinnerService, private toaster: AppToasterServiceService) { }

  ngOnInit() {
    this.spinner.show();

    this.loadAll();

    this.spinner.hide();
  }

  loadAll() {
    this.service.getAll().subscribe((requests: SOAReplaceCardRequest[]) => {
      this.allRequests = this.filteredRequests = requests;
    },
    (err) => {
      this.toaster.errorToast(err.message);
      console.log(JSON.stringify(err));
    }
  );
  }

}
