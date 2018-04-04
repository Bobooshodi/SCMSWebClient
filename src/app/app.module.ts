import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppToasterModule } from './Shared/app-toaster/app-toaster.module';
import { LoginModule } from './ApplicationModules/General/login/login.module';
import { MainNavModule } from './ApplicationModules/General/main-nav/main-nav.module';
import { ManageRequestsModule } from './ApplicationModules/Core/manage-requests/manage-requests.module';
import { ManageCompaniesModule } from './ApplicationModules/Core/manage-companies/manage-companies.module';
import { ManageShcTenantsModule } from './ApplicationModules/Core/manage-shc-tenants/manage-shc-tenants.module';
import { CardInventoryModule } from './ApplicationModules/Core/card-inventory/card-inventory.module';
import { ManageAccessUnitModule } from './ApplicationModules/Core/manage-access-unit/manage-access-unit.module';
import { ManageBuildingModule } from './ApplicationModules/Core/manage-building/manage-building.module';
import { ManageBusinessUnitModule } from './ApplicationModules/Core/manage-business-unit/manage-business-unit.module';
import { ManageCardTypeModule } from './ApplicationModules/Core/manage-card-type/manage-card-type.module';
import { ManageCardVendorsModule } from './ApplicationModules/Core/manage-card-vendors/manage-card-vendors.module';
import { ManageCardholdersModule } from './ApplicationModules/Core/manage-cardholders/manage-cardholders.module';
import { ManageCardsModule } from './ApplicationModules/Core/manage-cards/manage-cards.module';
import { ManageOperatorsModule } from './ApplicationModules/Core/manage-operators/manage-operators.module';
import { ManageReportsModule } from './ApplicationModules/Core/manage-reports/manage-reports.module';
import { PageNotFoundModule } from './ApplicationModules/General/page-not-found/page-not-found.module';
import { ApplicationRouterModule } from './Shared/application-router/application-router.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './ApplicationModules/General/page-not-found/page-not-found.component';
import { LoginComponent } from './ApplicationModules/General/login/login.component';
import { CardInventoryComponent } from './ApplicationModules/Core/card-inventory/card-inventory.component';
import { MainNavComponent } from './ApplicationModules/General/main-nav/main-nav.component';

import { Server } from './Models/Application/server.model';

import { AuthGuard } from './Shared/auth/auth.guard';
import { environment } from '../environments/environment';
import { LoginGuard } from './Shared/application-router/login.guard';

import { ToasterService } from 'angular2-toaster';
import { SettingsService } from './Services/settings.service';
import { HttpRequestService } from './Services/common/http-request.service';
import { AppToasterServiceService } from './Services/common/app-toaster-service.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppToasterModule,
    LoginModule,
    MainNavModule,
    CardInventoryModule,
    ManageAccessUnitModule,
    ManageBuildingModule,
    ManageBusinessUnitModule,
    ManageRequestsModule,
    ManageCardTypeModule,
    ManageCardVendorsModule,
    ManageCompaniesModule,
    ManageShcTenantsModule,
    ManageCardholdersModule,
    ManageCardsModule,
    ManageOperatorsModule,
    ManageReportsModule,
    PageNotFoundModule,
    ApplicationRouterModule,
    Ng4LoadingSpinnerModule.forRoot(),
  ],
  exports: [
    FormsModule,
  ],
  providers: [
    LoginGuard,
    AuthGuard,
    HttpRequestService,
    SettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [SettingsService],
      multi: true
    },
    ToasterService,
    AppToasterServiceService,
    Ng4LoadingSpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function ConfigLoader(settingsService: SettingsService) {
  // Note: this factory need to return a function (that return a promise)
    return () => settingsService.loadSettings(environment.configFile);
  }
