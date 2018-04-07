import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAccessUnitComponent } from './manage-access-unit.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { AppModalModule } from '../../../Shared/modal/modal.module';

const accessGroupRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageAccessUnitComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppModalModule,
    RouterModule.forChild(accessGroupRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageAccessUnitComponent]
})
export class ManageAccessUnitModule { }
