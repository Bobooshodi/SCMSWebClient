import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageReportsComponent } from './manage-reports.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';


const reportRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'manage', component: ManageReportsComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(reportRoutes)
  ],
  declarations: [ManageReportsComponent]
})
export class ManageReportsModule { }
