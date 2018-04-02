import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageShcTenantsComponent } from './manage-shc-tenants.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';

const tenantRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageShcTenantsComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tenantRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageShcTenantsComponent]
})
export class ManageShcTenantsModule { }
