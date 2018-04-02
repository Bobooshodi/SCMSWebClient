import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageBusinessUnitComponent } from './manage-business-unit.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';

const businessUnitRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageBusinessUnitComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(businessUnitRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageBusinessUnitComponent]
})
export class ManageBusinessUnitModule { }
