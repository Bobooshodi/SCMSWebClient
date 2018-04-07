import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageBusinessUnitComponent } from './manage-business-unit.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { AppModalModule } from '../../../Shared/modal/modal.module';
import { ModalService } from './../../../Shared/modal/modal.service';
import { BusinessUnitsService } from '../../../Services/business-units.service';

const businessUnitRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageBusinessUnitComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    AppModalModule,
    RouterModule.forChild(businessUnitRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageBusinessUnitComponent],
  providers: [
    ModalService,
    BusinessUnitsService
  ]
})
export class ManageBusinessUnitModule { }
