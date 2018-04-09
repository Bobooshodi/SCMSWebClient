import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { PersonalisationRequestsDashboardComponent } from './personalisation-requests-dashboard/personalisation-requests-dashboard.component';
import { BlacklistRequestDashboardComponent } from './blacklist-request-dashboard/blacklist-request-dashboard.component';
import { CardCollectionsDashboardComponent } from './card-collections-dashboard/card-collections-dashboard.component';
import { ReplacementRequestsDashboardComponent } from './replacement-requests-dashboard/replacement-requests-dashboard.component';
import { DistributionRequestsDashboardComponent } from './distribution-requests-dashboard/distribution-requests-dashboard.component';
import { RequestsDashboardComponent } from './requests-dashboard.component';

const requestsDashboardRoutes: Routes = [
  { path: '', redirectTo: 'blacklist', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'blacklist', component: BlacklistRequestDashboardComponent}, // , canActivate: [AuthGuard] },
  { path: 'replacement', component: ReplacementRequestsDashboardComponent}, // , canActivate: [AuthGuard] },
  { path: 'distribution', component: DistributionRequestsDashboardComponent}, // , canActivate: [AuthGuard] },
  { path: 'personalisation', component: PersonalisationRequestsDashboardComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(requestsDashboardRoutes)
  ],
  exports: [
    RouterModule,
    RequestsDashboardComponent
  ],
  declarations: [
    RequestsDashboardComponent,
    PersonalisationRequestsDashboardComponent,
    BlacklistRequestDashboardComponent,
    CardCollectionsDashboardComponent,
    ReplacementRequestsDashboardComponent,
    DistributionRequestsDashboardComponent
  ]
})
export class RequestsDashboardModule { }
