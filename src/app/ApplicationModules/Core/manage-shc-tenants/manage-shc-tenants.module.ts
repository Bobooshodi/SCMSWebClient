import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageShcTenantsComponent } from './manage-shc-tenants.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { ShcTenantsService } from '../../../Services/shc-tenants.service';
import { AppModalModule } from '../../../Shared/modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShcTenantPipesModule } from '../../../Shared/pipes/shc-tenant-pipes/shc-tenant-pipes.module';
import { BuildingPipesModule } from '../../../Shared/pipes/building-pipes/building-pipes.module';

const tenantRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageShcTenantsComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppModalModule,
    ReactiveFormsModule,
    BuildingPipesModule,
    ShcTenantPipesModule,
    RouterModule.forChild(tenantRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageShcTenantsComponent],
  providers: [
    ShcTenantsService
  ]
})
export class ManageShcTenantsModule { }
