import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { CreateCardholderComponent } from './create-cardholder/create-cardholder.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateTenantComponent } from './create-tenant/create-tenant.component';
import { CardholderRegistrationComponent } from './cardholder-registration.component';
import { RegisterVehiclesComponent } from './register-vehicles/register-vehicles.component';

import { CardholderService } from '../../../../Services/cardholder.service';
import { DataSendingService } from '../../../../Services/application/data-sending.service';
import { DataPassingService } from '../../../../Services/application/data-passing.service';
import { VehicleService } from '../../../../Services/vehicle.service';
import { AppModalModule } from '../../../../Shared/modal/modal.module';
import { TenantService } from '../../../../Services/tenant.service';
import { EmployeeService } from '../../../../Services/employee.service';
import { CompanyService } from '../../../../Services/company.service';
import { BuildingPipesModule } from '../../../../Shared/pipes/building-pipes/building-pipes.module';

const registrationRoutes: Routes = [
  // { path: '', redirectTo: 'cardholder', pathMatch: 'full' }, // , canActivate: [AuthGuard] },
  { path: 'cardholder', component: CreateCardholderComponent},
  { path: 'cardholder/:id', component: CreateCardholderComponent},
  { path: 'employee', component: CreateEmployeeComponent},
  { path: 'employee/:id', component: CreateEmployeeComponent},
  { path: 'tenant', component: CreateTenantComponent},
  { path: 'tenant/:id', component: CreateTenantComponent},
  { path: 'vehicles', component: RegisterVehiclesComponent},
  { path: 'vehicles/:id', component: RegisterVehiclesComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AppModalModule,
    OwlDateTimeModule,
    ReactiveFormsModule,
    BuildingPipesModule,
    OwlNativeDateTimeModule,
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
    TenantService,
    VehicleService,
    CompanyService,
    EmployeeService,
    CardholderService,
    DataPassingService,
    DataSendingService
  ]
})
export class CardholderRegistrationModule { }
