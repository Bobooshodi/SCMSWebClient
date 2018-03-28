import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCardholdersComponent } from './manage-cardholders.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';

const buildingRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCardholdersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(buildingRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageCardholdersComponent]
})
export class ManageCardholdersModule { }
