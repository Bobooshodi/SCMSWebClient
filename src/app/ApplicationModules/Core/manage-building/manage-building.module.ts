import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ManageBuildingComponent } from './manage-building.component';

import { AuthGuard } from '../../../Shared/auth/auth.guard';

import { BuildingService } from './../../../Services/building.service';
import { AppModalModule } from '../../../Shared/modal/modal.module';
import { ModalService } from './../../../Shared/modal/modal.service';


const buildingRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageBuildingComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    AppModalModule,
    RouterModule.forChild(buildingRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageBuildingComponent],
  providers: [
    BuildingService,
    ModalService
  ]
})
export class ManageBuildingModule { }
