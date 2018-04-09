import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CardholdersDashboardComponent } from './cardholders-dashboard/cardholders-dashboard.component';
import { CardsDashboardComponent } from './cards-dashboard/cards-dashboard.component';
import { RequestsDashboardModule } from './requests-dashboard/requests-dashboard.module';
import { RequestsDashboardComponent } from './requests-dashboard/requests-dashboard.component';

const dashboardRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent}, // , canActivate: [AuthGuard] },
  { path: 'requests', component: RequestsDashboardComponent, // , canActivate: [AuthGuard], canActivateChild: [AuthGuard],
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
    CardsDashboardComponent]
})
export class DashboardModule { }
