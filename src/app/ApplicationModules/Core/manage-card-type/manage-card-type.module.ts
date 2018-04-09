import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CardTypeService } from './../../../Services/card-type.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCardTypeComponent } from './manage-card-type.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { CardTypePipesModule } from './../../../Shared/pipes/card-type-pipes/card-type-pipes.module';
import { AppModalModule } from '../../../Shared/modal/modal.module';

const cardTypeRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCardTypeComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppModalModule,
    CardTypePipesModule,
    RouterModule.forChild(cardTypeRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageCardTypeComponent],
  providers: [
    CardTypeService
  ]
})
export class ManageCardTypeModule { }
