import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSettingsComponent } from './manage-settings.component';

const settingsRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageSettingsComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(settingsRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageSettingsComponent]
})
export class ManageSettingsModule { }
