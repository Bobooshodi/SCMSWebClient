import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageBusinessUnitComponent } from './manage-business-unit.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { AppModalModule } from '../../../Shared/modal/modal.module';
import { ModalService } from './../../../Shared/modal/modal.service';
import { BusinessUnitsService } from '../../../Services/business-units.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessUnitPipesModule } from '../../../Shared/pipes/business-unit-pipes/business-unit-pipes.module';
import { BuildingPipesModule } from '../../../Shared/pipes/building-pipes/building-pipes.module';

const businessUnitRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageBusinessUnitComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppModalModule,
    ReactiveFormsModule,
    BuildingPipesModule,
    BusinessUnitPipesModule,
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
