import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageOperatorsComponent } from './manage-operators.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';

const operatorRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'manage', component: ManageOperatorsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(operatorRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageOperatorsComponent]
})
export class ManageOperatorsModule { }
