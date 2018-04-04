import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCardVendorsComponent } from './manage-card-vendors.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { CardVendorService } from '../../../Services/card-vendor.service';
import { CardVendorPipesModule } from '../../../Shared/pipes/card-vendor-pipes/card-vendor-pipes.module';

const vendorRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCardVendorsComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardVendorPipesModule,
    RouterModule.forChild(vendorRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageCardVendorsComponent],
  providers: [
    CardVendorService
  ]
})
export class ManageCardVendorsModule { }
