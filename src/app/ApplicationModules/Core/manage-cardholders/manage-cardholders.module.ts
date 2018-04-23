import { DataSendingService } from './../../../Services/application/data-sending.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ManageCardholdersComponent } from './manage-cardholders.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { CardholderDetailsComponent } from './cardholder-details/cardholder-details.component';
import { CardholderRegistrationModule } from './cardholder-registration/cardholder-registration.module';
import { CardholderRegistrationComponent } from './cardholder-registration/cardholder-registration.component';
import { CardholderService } from '../../../Services/cardholder.service';
import { CardholderPipesModule } from '../../../Shared/pipes/cardholder-pipes/cardholder-pipes.module';
import { CardPipesModule } from '../../../Shared/pipes/card-pipes/card-pipes.module';
import { AppModalModule } from '../../../Shared/modal/modal.module';
import { ModalService } from '../../../Shared/modal/modal.service';
import { BuildingPipesModule } from '../../../Shared/pipes/building-pipes/building-pipes.module';
import { CardTypePipesModule } from '../../../Shared/pipes/card-type-pipes/card-type-pipes.module';

const cardholderRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' }, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCardholdersComponent}, // , canActivate: [AuthGuard] },
  { path: 'details/:id', component: CardholderDetailsComponent},
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
    FormsModule,
    CommonModule,
    AppModalModule,
    CardPipesModule,
    CardTypePipesModule,
    BuildingPipesModule,
    CardholderPipesModule,
    CardholderRegistrationModule,
    RouterModule.forChild(cardholderRoutes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    ManageCardholdersComponent,
    CardholderDetailsComponent,
  ],
  providers: [
    ModalService,
    CardholderService,
    DataSendingService
  ]
})
export class ManageCardholdersModule { }
