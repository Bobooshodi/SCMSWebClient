import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../../../Shared/auth/auth.guard';

import { ManageRequestsComponent } from './manage-requests.component';
import { PersonalizationRequestsComponent } from './personalization-requests/personalization-requests.component';
import { ReplaceCardRequestsComponent } from './replace-card-requests/replace-card-requests.component';
import { BlacklistRequestsComponent } from './blacklist-requests/blacklist-requests.component';
import { CardDistributionRequestsComponent } from './card-distribution-requests/card-distribution-requests.component';

import { DataService } from './data.service';
import { CardReplacementRequestsService } from '../../../Services/card-replacement-requests.service';
import { PersonalisationRequestsService } from '../../../Services/personalisation-requests.service';
import { CardRequestsService } from '../../../Services/card-requests.service';
import { RequestPipesModule } from '../../../Shared/pipes/request-pipes/request-pipes.module';

const requestsRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'main', component: ManageRequestsComponent, // , canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'blacklist', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
      { path: 'blacklist', component: BlacklistRequestsComponent}, // , canActivate: [AuthGuard] },
      { path: 'replacement', component: ReplaceCardRequestsComponent}, // , canActivate: [AuthGuard] },
      { path: 'distribution', component: CardDistributionRequestsComponent}, // , canActivate: [AuthGuard] },
      { path: 'personalisation', component: PersonalizationRequestsComponent} // , canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RequestPipesModule,
    RouterModule.forChild(requestsRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ManageRequestsComponent,
    BlacklistRequestsComponent,
    ReplaceCardRequestsComponent,
    PersonalizationRequestsComponent,
    CardDistributionRequestsComponent,
  ],
  providers: [
    DataService,
    CardRequestsService,
    CardReplacementRequestsService,
    PersonalisationRequestsService,
  ]
})
export class ManageRequestsModule { }
