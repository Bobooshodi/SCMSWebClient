import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateCardholderComponent } from './create-cardholder/create-cardholder.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateTenantComponent } from './create-tenant/create-tenant.component';
import { CardholderRegistrationComponent } from './cardholder-registration.component';
import { RegisterVehiclesComponent } from './register-vehicles/register-vehicles.component';

import { CardholderService } from '../../../../Services/cardholder.service';
import { DataSendingService } from '../../../../Services/application/data-sending.service';
import { DataPassingService } from '../../../../Services/application/data-passing.service';

const registrationRoutes: Routes = [
  // { path: '', redirectTo: 'cardholder', pathMatch: 'full' }, // , canActivate: [AuthGuard] },
  { path: 'cardholder', component: CreateCardholderComponent},
  { path: 'employee', component: CreateEmployeeComponent},
  { path: 'tenant', component: CreateTenantComponent},
  { path: 'vehicles', component: RegisterVehiclesComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(registrationRoutes)
  ],
  exports: [
    RouterModule,
    CardholderRegistrationComponent
  ],
  declarations: [
    CardholderRegistrationComponent,
    CreateCardholderComponent,
    CreateEmployeeComponent,
    CreateTenantComponent,
    RegisterVehiclesComponent
  ],
  providers: [
    CardholderService,
    DataPassingService,
    DataSendingService
  ]
})
export class CardholderRegistrationModule { }
