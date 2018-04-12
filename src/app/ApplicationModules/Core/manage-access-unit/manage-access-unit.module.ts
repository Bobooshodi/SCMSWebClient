import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAccessUnitComponent } from './manage-access-unit.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { AppModalModule } from '../../../Shared/modal/modal.module';
import { AccessUnitService } from '../../../Services/access-unit.service';
import { AccessGroupPipesModule } from '../../../Shared/pipes/access-group-pipes/access-group-pipes.module';
import { BuildingService } from '../../../Services/building.service';
import { BuildingPipesModule } from '../../../Shared/pipes/building-pipes/building-pipes.module';

const accessGroupRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageAccessUnitComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppModalModule,
    BuildingPipesModule,
    AccessGroupPipesModule,
    RouterModule.forChild(accessGroupRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageAccessUnitComponent],
  providers: [
    AccessUnitService,
    BuildingService
  ]
})
export class ManageAccessUnitModule { }
