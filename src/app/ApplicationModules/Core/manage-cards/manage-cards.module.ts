import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCardsComponent } from './manage-cards.component';

const cardRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: ManageCardsComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cardRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ManageCardsComponent]
})
export class ManageCardsModule { }
