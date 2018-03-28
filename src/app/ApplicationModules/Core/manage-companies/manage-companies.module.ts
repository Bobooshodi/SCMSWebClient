import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCompaniesComponent } from './manage-companies.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';

const companiesRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCompaniesComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(companiesRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageCompaniesComponent]
})
export class ManageCompaniesModule { }
