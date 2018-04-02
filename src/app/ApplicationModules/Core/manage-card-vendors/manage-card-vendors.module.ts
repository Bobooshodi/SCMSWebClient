import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCardVendorsComponent } from './manage-card-vendors.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';

const vendorRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCardVendorsComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(vendorRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageCardVendorsComponent]
})
export class ManageCardVendorsModule { }
