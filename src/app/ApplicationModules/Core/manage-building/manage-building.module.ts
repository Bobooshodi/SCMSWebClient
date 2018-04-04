import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ManageBuildingComponent } from './manage-building.component';

import { AuthGuard } from '../../../Shared/auth/auth.guard';

import { BuildingService } from './../../../Services/building.service';


const buildingRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageBuildingComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(buildingRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageBuildingComponent],
  providers: [
    BuildingService
  ]
})
export class ManageBuildingModule { }
