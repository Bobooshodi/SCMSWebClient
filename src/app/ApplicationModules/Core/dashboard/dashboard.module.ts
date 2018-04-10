import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CardholdersDashboardComponent } from './cardholders-dashboard/cardholders-dashboard.component';
import { CardsDashboardComponent } from './cards-dashboard/cards-dashboard.component';
import { RequestsDashboardModule } from './requests-dashboard/requests-dashboard.module';
import { RequestsDashboardComponent } from './requests-dashboard/requests-dashboard.component';
import { CardholderService } from '../../../Services/cardholder.service';
import { CardService } from '../../../Services/card.service';

const dashboardRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, // , canActivate: [AuthGuard] },
    children: [
      {
        path: '',
        loadChildren : () => RequestsDashboardModule
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RequestsDashboardModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    CardholdersDashboardComponent,
    CardsDashboardComponent
  ],
  providers: [
    CardService,
    CardholderService,
  ]
})
export class DashboardModule { }
