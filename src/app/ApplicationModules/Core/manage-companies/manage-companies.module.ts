import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManageCompaniesComponent } from './manage-companies.component';

import { AuthGuard } from '../../../Shared/auth/auth.guard';

import { AppModalModule } from '../../../Shared/modal/modal.module';

import { CompanyService } from '../../../Services/company.service';
import { BusinessUnitsService } from '../../../Services/business-units.service';

import { BusinessUnitPipesModule } from './../../../Shared/pipes/business-unit-pipes/business-unit-pipes.module';
import { CompanyPipesModule } from '../../../Shared/pipes/company-pipes/company-pipes.module';

const companiesRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCompaniesComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AppModalModule,
    CompanyPipesModule,
    ReactiveFormsModule,
    BusinessUnitPipesModule,
    RouterModule.forChild(companiesRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageCompaniesComponent],
  providers: [
    CompanyService,
    BusinessUnitsService,
  ]
})
export class ManageCompaniesModule { }
