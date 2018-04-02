import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { MainNavComponent } from './main-nav.component';
import { ManageBuildingComponent } from './../../Core/manage-building/manage-building.component';
import { ManageBuildingModule } from '../../Core/manage-building/manage-building.module';
import { ManageBusinessUnitModule } from '../../Core/manage-business-unit/manage-business-unit.module';
import { ManageCardTypeModule } from '../../Core/manage-card-type/manage-card-type.module';
import { ManageCardVendorsModule } from '../../Core/manage-card-vendors/manage-card-vendors.module';
import { ManageCardholdersModule } from '../../Core/manage-cardholders/manage-cardholders.module';
import { CardInventoryModule } from '../../Core/card-inventory/card-inventory.module';
import { ManageOperatorsModule } from '../../Core/manage-operators/manage-operators.module';
import { ManageReportsModule } from '../../Core/manage-reports/manage-reports.module';
import { ManageAccessUnitModule } from '../../Core/manage-access-unit/manage-access-unit.module';
import { ManageRequestsModule } from '../../Core/manage-requests/manage-requests.module';
import { ManageShcTenantsModule } from '../../Core/manage-shc-tenants/manage-shc-tenants.module';
import { ManageCompaniesModule } from '../../Core/manage-companies/manage-companies.module';
import { ManageCardsModule } from '../../Core/manage-cards/manage-cards.module';

const appMainRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'main', component: MainNavComponent, // , canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren : () => ManageBuildingModule
      },
      {
        path: 'buildings',
        loadChildren : () => ManageBuildingModule
      },
      {
        path: 'business-units',
        loadChildren : () => ManageBusinessUnitModule
      },
      {
        path: 'cards',
        loadChildren : () => ManageCardsModule
      },
      {
        path: 'card-types',
        loadChildren : () => ManageCardTypeModule
      },
      {
        path: 'vendors',
        loadChildren : () => ManageCardVendorsModule
      },
      {
        path: 'cardholders',
        loadChildren : () => ManageCardholdersModule
      },
      {
        path: 'inventory',
        loadChildren : () => CardInventoryModule
      },
      {
        path: 'operators',
        loadChildren : () => ManageOperatorsModule
      },
      {
        path: 'reports',
        loadChildren : () => ManageReportsModule
      },
      {
        path: 'access-units',
        loadChildren : () => ManageAccessUnitModule
      },
      {
        path: 'requests',
        loadChildren : () => ManageRequestsModule
      },
      {
        path: 'shc-tenants',
        loadChildren : () => ManageShcTenantsModule
      },
      {
        path: 'companies',
        loadChildren : () => ManageCompaniesModule
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appMainRoutes)
  ],
  exports: [
    RouterModule,
    MainNavComponent
  ],
  declarations: [MainNavComponent]
})
export class MainNavModule { }
