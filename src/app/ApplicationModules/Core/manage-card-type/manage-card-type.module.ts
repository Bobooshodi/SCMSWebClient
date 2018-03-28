import { Routes, RouterModule } from '@angular/router';
import { CardTypeService } from './../../../Services/card-type.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCardTypeComponent } from './manage-card-type.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';

const cardTypeRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCardTypeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cardTypeRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageCardTypeComponent],
  providers: [
    CardTypeService
  ]
})
export class ManageCardTypeModule { }