import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ManageCardsComponent } from './manage-cards.component';

import { CardService } from './../../../Services/card.service';
import { CardPipesModule } from '../../../Shared/pipes/card-pipes/card-pipes.module';
import { AppModalModule } from '../../../Shared/modal/modal.module';

const cardRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCardsComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppModalModule,
    CardPipesModule,
    RouterModule.forChild(cardRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ManageCardsComponent,
  ],
  providers: [
    CardService
  ]
})
export class ManageCardsModule { }
