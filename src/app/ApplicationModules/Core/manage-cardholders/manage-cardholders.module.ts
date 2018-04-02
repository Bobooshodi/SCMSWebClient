import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCardholdersComponent } from './manage-cardholders.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { CardholderDetailsComponent } from './cardholder-details/cardholder-details.component';
import { CardholderRegistrationModule } from './cardholder-registration/cardholder-registration.module';
import { CardholderRegistrationComponent } from './cardholder-registration/cardholder-registration.component';

const buildingRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' }, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCardholdersComponent}, // , canActivate: [AuthGuard] },
  { path: 'create', component: CardholderRegistrationComponent,
    children: [
      {
        path: '',
        loadChildren : () => CardholderRegistrationModule
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    CardholderRegistrationModule,
    RouterModule.forChild(buildingRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ManageCardholdersComponent,
    CardholderDetailsComponent,
  ]
})
export class ManageCardholdersModule { }
