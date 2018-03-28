import { ManageBuildingComponent } from './../../ApplicationModules/Core/manage-building/manage-building.component';
import { RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../../ApplicationModules/General/page-not-found/page-not-found.component';
import { CardInventoryComponent } from './../../ApplicationModules/Core/card-inventory/card-inventory.component';
import { LoginComponent } from './../../ApplicationModules/General/login/login.component';
import { AuthGuard } from '../auth/auth.guard';
import { LoginGuard } from './login.guard';
import { MainNavComponent } from '../../ApplicationModules/General/main-nav/main-nav.component';

const appRoutes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: '',
    canActivate: [LoginGuard],
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [ ]
})

export class ApplicationRouterModule { }
