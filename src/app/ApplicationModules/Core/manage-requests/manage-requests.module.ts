import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRequestsComponent } from './manage-requests.component';
import { PersonalizationRequestsComponent } from './personalization-requests/personalization-requests.component';
import { ReplaceCardRequestsComponent } from './replace-card-requests/replace-card-requests.component';
import { BlacklistRequestsComponent } from './blacklist-requests/blacklist-requests.component';
import { CardDistributionRequestsComponent } from './card-distribution-requests/card-distribution-requests.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';

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
  ]
})
export class ManageRequestsModule { }
